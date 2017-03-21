import React from 'react'

const TransactionTableHeadings = (props) => {

  const tableHeadings = props.subBudget.transactions[0].keys.map((key) => {
    return <th>{key}</th>
  })

  return (
    <tr>
      {tableHeadings}
    </tr>
  )
}

export default TransactionTableHeadings
