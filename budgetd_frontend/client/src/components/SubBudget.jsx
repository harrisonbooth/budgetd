import React from 'react'

const SubBudget = (props) => {
  console.log(props);
  return (
    <div className='subbudget'><p>{props.subBudget.name}</p><p className="subbudget-amount">£{props.subBudget.amount}</p><hr/></div>
  )
}

export default SubBudget
