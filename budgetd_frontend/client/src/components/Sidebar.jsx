import React from 'react'
import Overview from './Overview'
import SubBudgetList from './SubBudgetList'
import NewSubBudget from './newSubBudget'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subBudgets: this.props.budget.sub_budgets
    }

    this.onCreateSubBudget = this.onCreateSubBudget.bind(this)
  }

  onCreateSubBudget(budget) {
    this.setState({subBudgets: budget.sub_budgets})
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <Overview total={this.props.budget.total} originalTotal={this.props.budget.originalTotal}/>
        <SubBudgetList subBudgets={this.state.subBudgets}/>
        <NewSubBudget onCreateSubBudget={this.onCreateSubBudget.bind(this)}/>
      </div>
    )
  }
}

export default Sidebar
