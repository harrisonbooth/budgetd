import React from 'react'
import BudgetBar from './BudgetBar'

class SubBudgetHeader extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <header className='subbudget-header'>
        <h1 id="subbudget-name">{this.props.subBudget.name}</h1>
        <div className="subbudget-overview">
          <p>current budget: £{(parseFloat(this.props.subBudget.amount)/100).toFixed(2)}</p>
          <p>monthly budget: £{(parseFloat(this.props.subBudget.originalAmount)/100).toFixed(2)}</p>
        </div>
        <div className="subbudget-bar-wrapper">
          <BudgetBar maxWidth={500} total={this.props.subBudget.amount} originalTotal={this.props.subBudget.originalAmount}/>
        </div>
      </header>
    )
  }
}

export default SubBudgetHeader
