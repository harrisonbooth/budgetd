import React from 'react'

const BudgetBar = (props) => {
  return (
    <div className='budget-bar'>
      <progress className="budget-bar-progress" max={props.originalTotal} value={props.total}></progress>
    </div>
  )
}

export default BudgetBar
