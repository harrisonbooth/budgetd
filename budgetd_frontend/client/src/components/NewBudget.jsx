import React from 'react'
import {browserHistory} from 'react-router'

class NewBudget extends React.Component{
  constructor(props) {
    super(props)

    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.createBudget = this.createBudget.bind(this)

    this.state = {total: 0}
  }

  handleAmountChange(event) {
    const enteredTotal = (parseInt(event.target.value).toFixed(2)) * 100
    this.setState({total: enteredTotal})
  }

  createBudget(event) {
    event.preventDefault()

    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:5000/budget')
    request.setRequestHeader('Content-type', 'application/json')
    request.withCredentials= true

    request.onload = () => {
      if(request.status === 200){
        const budget = JSON.parse(request.responseText)
        this.props.onCreateBudget(budget)
      }
    }
    request.send(JSON.stringify({
      budget: {
        total: this.state.total
      }
    }))
  }

  render() {
    return (
      <form onSubmit={this.createBudget} className='new-budget-form'>
        <input type="number" onChange={this.handleAmountChange}  placeholder="Monthly Total" />
        <button onClick={this.signUp}>  Create budget </button>
      </form>
    )
  }
}

export default NewBudget
