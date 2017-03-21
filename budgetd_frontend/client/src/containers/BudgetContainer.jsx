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
      selectedSubBudget: null
    }

    this.onSelectSubBudget = this.onSelectSubBudget.bind(this)
    this.onCreateBudget = this.onCreateBudget.bind(this)
  }

  componentDidMount() {
    var url = 'http://localhost:5000/budget'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        // console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { budget: data } )
      } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
      }
    }
    request.send(null)
  }

  onCreateBudget(budget) {
    this.setState({budget: budget})
  }

  onSelectSubBudget(subBudget) {
    this.setState({selectedSubBudget: subBudget})
  }

  render() {
    if(!this.state.budget){
      return (
        <NewBudget onCreateBudget={this.onCreateBudget.bind(this)}/>
      )
    }

    return (
      <div className='budget-container'>
        <Header budget={this.state.budget}/>
        <div className='budget-container-body'>
          <Sidebar budget={this.state.budget} onSelectSubBudget={this.onSelectSubBudget.bind(this)}/>
          <SubBudgetWindow subBudget={this.state.selectedSubBudget}/>
        </div>
      </div>
    )
  }
}

export default BudgetContainer