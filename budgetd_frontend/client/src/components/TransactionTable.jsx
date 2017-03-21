import React from 'react'
import TransactionTableHeadings from './TransactionTableHeadings'
import TransactionTableRow from './TransactionTableRow'

class TransactionTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    if(!this.props.subBudget.transactions.length){
      return (
        <div className="greyed-text">
          <h2>Transactions will show up here once you've created some!</h2>
        </div>
      )
    }

    const subBudgetRows = this.props.subBudget.transactions.map((transaction, index) => {
      return <TransactionTableRow transaction={transaction} key={index} />
    })

    return (
      <div>
        <table className="transaction-table">
          <div className="table-wrapper">
            <TransactionTableHeadings subBudget={this.props.subBudget} />
            <col width="450"/>
            <col width="450"/>
            <tbody id="transaction-table-body">
              {subBudgetRows}
            </tbody>
          </div>
        </table>
      </div>
    )
  }
}

export default TransactionTable
