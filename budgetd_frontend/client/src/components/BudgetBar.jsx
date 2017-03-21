import React from 'react'

const BudgetBar = (props) => {

  const barStyle = {
    width: props.maxWidth
  }

  const percentageUsed = 1 - (props.total / props.originalTotal)
  let date = new Date()
  const percentageThroughMonth = date.getDate() / 31
  let colour = "green"

  if(percentageUsed > percentageThroughMonth + 0.2){
    colour = "red"
  } else if(percentageUsed < percentageThroughMonth + 0.2 && percentageUsed > percentageThroughMonth - 0.2){
    colour = "orange"
  } else {
    colour = "green"
  }

  const classes = "budget-bar-progress " + colour

  return (
    <div className='budget-bar'>
      <progress style={barStyle} className={classes} max={props.originalTotal} value={props.total}></progress>
    </div>
  )
}

export default BudgetBar
