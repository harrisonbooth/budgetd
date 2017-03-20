import React from 'react'
import SubBudget from './SubBudget'

const SubBudgetList = (props) => {
  const subBudgetNodes = props.subBudgets.map((subBudget, index) => {
    return <SubBudget subBudget={subBudget} key={index} onSelectSubBudget={props.onSelectSubBudget}/>
  })

  return (
    <div className="subbudget-list">
      <hr/>
      {subBudgetNodes}
    </div>
  )
}

export default SubBudgetList
