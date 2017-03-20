import React from 'react'
import Overview from './Overview'
import SubBudgetList from './SubBudgetList'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <Overview total={this.props.budget.total} originalTotal={this.props.budget.originalTotal}/>
        <SubBudgetList subBudgets={this.props.budget.sub_budgets}/>
      </div>
    )
  }
}

export default Sidebar
