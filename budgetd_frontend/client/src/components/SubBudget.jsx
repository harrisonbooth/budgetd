import React from 'react'

const SubBudget = (props) => {
  const onSelect = (event) => {
    props.onSelectSubBudget(props.subBudget)
  }

  return (
    <div className='subbudget' key={props.index} onClick={onSelect}>
      <p>{props.subBudget.name}</p><p className="subbudget-amount">£{(props.subBudget.amount/100).toFixed(2)}</p><hr/>
      <button className="subbudget-delete-button" onClick={props.handleSubbudgetDelete}/>
    </div>
  )
}

export default SubBudget
