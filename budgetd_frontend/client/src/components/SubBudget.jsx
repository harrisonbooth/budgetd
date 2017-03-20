import React from 'react'

const SubBudget = (props) => {
  return (
    <div className='subbudget'><p>{props.subBudget.name}</p><p className="subbudget-amount">£{props.subBudget.amount/100}</p><hr/></div>
  )
}

export default SubBudget
