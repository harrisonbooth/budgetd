import React from 'react'

const SubBudget = (props) => {
  return (
    <div className='subbudget' onClick={props.onSelectSubBudget}><p>{props.subBudget.name}</p><p className="subbudget-amount">£{(props.subBudget.amount/100).toFixed(2)}</p><hr/></div>
  )
}

export default SubBudget
