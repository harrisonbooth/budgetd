import React from 'react'
import {browserHistory} from 'react-router'

class NewSubBudget extends React.Component{
  constructor(props) {
    super(props)

    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.createSubBudget = this.createSubBudget.bind(this)

    this.state = {
      amount: 0,
      name: ""
    }
  }

  handleAmountChange(event) {
    const enteredAmount = (parseInt(event.target.value * 100))
    this.setState({amount: enteredAmount})
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  createSubBudget(event) {
    event.preventDefault()

    if(!this.state.name.length){
      return
    }

    const request = new XMLHttpRequest()
    request.open('POST', 'http://localhost:5000/budget/subbudgets')
    request.setRequestHeader('Content-type', 'application/json')
    request.withCredentials= true

    request.onload = () => {
      if(request.status === 200){
        const budget = JSON.parse(request.responseText)
        this.props.onCreateSubBudget(budget)
      }
    }
    request.send(JSON.stringify({
      newSubBudget: {
        amount: this.state.amount,
        name: this.state.name
      }
    }))
  }

  render() {
    return (
      <form onSubmit={this.createSubBudget} className='new-subbudget-form'>
        <input type="text" onChange={this.handleNameChange}  placeholder="Name" />
        <input type="number" step="any" onChange={this.handleAmountChange}  placeholder="Monthly Total" />
        <button onClick={this.signUp}>  Create sub-budget </button>
      </form>
    )
  }
}

export default NewSubBudget
