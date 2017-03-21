import React from 'react'

const TransactionTableHeadings = (props) => {
  // const tableHeadings = Object.keys(props.subBudget.transactions[0]).map((key, index) => {
  //   return <th key={index}>{key}</th>
  // })

  return (
    <thead>
      <tr className="table-headings table-row">
        <th>Location</th>
        <th>Amount</th>
      </tr>
    </thead>
  )
}

export default TransactionTableHeadings
