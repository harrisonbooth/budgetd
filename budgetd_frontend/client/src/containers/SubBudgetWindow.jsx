import React from 'react'
import TransactionTable from '../components/TransactionTable'

class SubBudgetWindow extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      subBudget: props.subBudget || null
    })
  }

  render() {
    if(!this.state.subBudget){
      return (
        <div><h2>When you select a sub-budget, it will show up here!</h2></div>
      )
    } else {
      return (
        <div className="subBudget-transactions-wrapper">
          <TransactionTable subBudget={this.state.subBudget} />
        </div>
      )
    }
  }
}

export default SubBudgetWindow
