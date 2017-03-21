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
    let transactionAmount = this.props.subBudget.transactions[this.props.subBudget.transactions.length - 1].amount
    let newSubBudgetAmount = this.props.subBudget.amount - transactionAmount
    this.setState({subBudgetAmount: newSubBudgetAmount})
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
