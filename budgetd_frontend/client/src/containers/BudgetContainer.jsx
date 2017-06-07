import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import NewBudget from '../components/NewBudget'
import SubBudgetWindow from './SubBudgetWindow'
import {browserHistory} from 'react-router'

class BudgetContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      budget: null,
      selectedSubBudget: null,
      newBudgetTotal: 999999999999
    }

    this.onSelectSubBudget = this.onSelectSubBudget.bind(this)
    this.onCreateBudget = this.onCreateBudget.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
    this.onResetBudgets = this.onResetBudgets.bind(this)
  }

  componentDidMount() {
    var url = 'http://localhost:5000/budget'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState( { budget: data } )
        this.calculateTotal()
      } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
      }
    }
    request.send(null)
  }

  calculateTotal() {
    let calculatedTotal = this.state.budget.originalTotal
    this.state.budget.sub_budgets.forEach((subBudget) => {
      calculatedTotal -= (subBudget.originalAmount - subBudget.amount)
    })
    if(calculatedTotal < 0){
      calculatedTotal = 0
    }
    this.setState({newBudgetTotal: calculatedTotal})
  }

  onCreateBudget(budget) {
    this.setState({budget})
  }

  onSelectSubBudget(subBudget) {
    this.setState({selectedSubBudget: subBudget})
  }

  onCreateSubBudget() {
    this.onCreateTransaction()
  }

  onCreateTransaction() {
    var url = 'http://localhost:5000/budget'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState( { budget: data } )
        this.state.budget.sub_budgets.forEach((subBudget) => {
          if(subBudget.id === this.state.selectedSubBudget.id){
            this.setState({selectedSubBudget: subBudget})
            return
          }
        })
        this.calculateTotal()
      } else{
        console.log("Uh oh you're not logged in!")
      }
    }
    request.send(null)
  }

  onResetBudgets(event) {
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open('DELETE', 'http://localhost:5000/budget/subBudgets/reset')
    request.setRequestHeader('Content-type', 'application/json')
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        this.props.onResetBudgets()
      }
    }

    request.send(null)
    window.location.reload()
  }

  handleSubbudgetDelete(event) {
    const request = new XMLHttpRequest()
    request.open('DELETE', 'http://localhost:5000/budget/subBudgets/' + this.state.selectedSubBudget.id)
    request.setRequestHeader('Content-Type', 'application/json')
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        const updatedBudget = JSON.parse(request.responseText)
        this.setState({budget: updatedBudget, selectedSubBudget: null})
        this.calculateTotal()
      }
    }

    request.send(null)
  }

  render() {
    if(!this.state.budget){
      return (
        <div className="login-form">
          <NewBudget onCreateBudget={this.onCreateBudget.bind(this)}/>
        </div>
      )
    }

    return (
      <div className='budget-container'>
        <Header onResetBudgets={this.onResetBudgets} budgetTotal={this.state.newBudgetTotal} budget={this.state.budget}/>
        <div className='budget-container-body'>
          <Sidebar subBudgets={this.state.budget.sub_budgets} budgetTotal={this.state.newBudgetTotal} onCreateSubBudget={this.onCreateSubBudget.bind(this)} budget={this.state.budget} onSelectSubBudget={this.onSelectSubBudget.bind(this)}/>
          <SubBudgetWindow handleSubbudgetDelete={this.handleSubbudgetDelete.bind(this)} onCreateTransactionUpdateTopBar={this.onCreateTransaction.bind(this)} subBudget={this.state.selectedSubBudget}/>
        </div>
      </div>
    )
  }
}

export default BudgetContainer
