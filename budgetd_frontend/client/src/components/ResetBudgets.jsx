import React from 'react'

const ResetBudgets = (props) => {
    return (
      <div className="reset-button-wrapper">
        <button className="reset-button" onClick={props.onResetBudgets}>Reset budgets</button>
      </div>
    )
}

export default ResetBudgets
