import React from 'react'
import TransactionTable from '../components/TransactionTable'
import SubBudgetHeader from '../components/SubBudgetHeader'
import NewTransaction from '../components/NewTransaction'

class SubBudgetWindow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subBudget: props.subBudget
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.subBudget || this.state.subBudget.id !== nextProps.subBudget.id) {
      this.setState({subBudget: nextProps.subBudget})
    }
  }

  onCreateTransaction(budget) {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:5000/budget/subBudget/' + this.props.subBudget.id + '/transactions')
    console.log(this.props.subBudget.id);
    request.setRequestHeader('Content-type', 'application/json')
    request.withCredentials = true
    request.onload = () => {
      const transactions = JSON.parse(request.responseText)

      const sortedTransactions = transactions.sort((transaction1, transaction2) => {
        return (new Date(transaction2.created_at) - new Date(transaction1.created_at))
      })

      const lastTransaction = sortedTransactions[0]

      let transactionAmount = lastTransaction.amount
      let newSubBudgetAmount = this.props.subBudget.amount - transactionAmount
      this.setState({subBudgetAmount: newSubBudgetAmount})
    }

    request.send(null)
  }

  render() {
    if(!this.props.subBudget){
      return (
        <div className="subbudget-transactions-wrapper greyed-text"><h2>When you select a sub-budget, it will show up here!</h2></div>
      )
    } else {
      return (
        <div className="subbudget-transactions-wrapper">
          <SubBudgetHeader subBudgetAmount={this.state.subBudgetAmount} subBudget={this.props.subBudget} />
          <TransactionTable subBudget={this.props.subBudget} />
          <NewTransaction onCreateTransaction={this.onCreateTransaction.bind(this)} subBudget={this.props.subBudget} />
        </div>
      )
    }
  }
}

export default SubBudgetWindow
