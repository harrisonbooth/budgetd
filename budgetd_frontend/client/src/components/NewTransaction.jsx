import React from 'react'

class NewTransaction extends React.Component {
  constructor(props) {
    super(props)

    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.createTransaction = this.createTransaction.bind(this)

    this.state = {
      amount: 0,
      location: ""
    }
  }

  handleAmountChange(event) {
    console.log(event.target.value)
    const enteredAmount = (parseInt(event.target.value * 100))
    this.setState({amount: enteredAmount})
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value})
  }

  createTransaction(event) {
    event.preventDefault()

    if(!this.state.location.length){
      return
    }

    const request = new XMLHttpRequest()
    request.open('POST', 'http://localhost:5000/budget/subBudgets/' + this.props.subBudget.id + '/newTransaction')
    request.setRequestHeader('Content-type', 'application/json')
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        const budget = JSON.parse(request.responseText)
        this.props.onCreateTransaction(budget)
      }
    }

    request.send(JSON.stringify({
      newTransaction: {
        location: this.state.location,
        amount: this.state.amount
      }
    }))
  }

  render() {
    return (
      <form onSubmit={this.createTransaction} className='new-transaction-form'>
        <input type="text" onChange={this.handleLocationChange}  placeholder="Location" />
        <input type="number" step="any" onChange={this.handleAmountChange}  placeholder="Amount" />
        <button onClick={this.createTransaction}>  Create transaction </button>
      </form>
    )
  }
}

export default NewTransaction
