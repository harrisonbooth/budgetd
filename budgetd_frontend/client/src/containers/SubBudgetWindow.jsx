import React from 'react'
// import TransactionTable from '../components/TransactionTable'
import SubBudgetHeader from '../components/SubBudgetHeader'

class SubBudgetWindow extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      subBudget: props.subBudget || null
    })
  }

  render() {
    if(!this.props.subBudget){
      return (
        <div className="subbudget-transactions-wrapper"><h2>When you select a sub-budget, it will show up here!</h2></div>
      )
    } else {
      return (
        <div className="subbudget-transactions-wrapper">
          <SubBudgetHeader subBudget={this.props.subBudget} />
        </div>
      )
    }
  }
}
// <TransactionTable subBudget={this.state.subBudget} />

export default SubBudgetWindow
