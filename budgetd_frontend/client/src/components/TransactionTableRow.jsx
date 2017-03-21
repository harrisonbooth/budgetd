import React from 'react'

const TransactionTableRow = (props) => {
  const transactionLocation = props.transaction.location
  const transactionAmount = (parseFloat(props.transaction.amount) / 100).toFixed(2)

  return (
    <tr className="table-row">
      <td>{transactionLocation}</td>
      <td>{transactionAmount}</td>
    </tr>
  )
}

export default TransactionTableRow
