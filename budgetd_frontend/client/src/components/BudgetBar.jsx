import React from 'react'

const BudgetBar = (props) => {

  const barStyle = {
    width: props.maxWidth
  }

  return (
    <div className='budget-bar'>
      <progress style={barStyle} className="budget-bar-progress" max={props.originalTotal} value={props.total}></progress>
    </div>
  )
}

export default BudgetBar
