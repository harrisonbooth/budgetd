import React from 'react'
import Overview from './Overview'
import SubBudgetList from './SubBudgetList'
import NewSubBudget from './newSubBudget'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subBudgets: this.props.budget.sub_budgets,
      budgetTotal: this.props.newBudgetTotal || this.props.budget.total
    }

    this.onCreateSubBudget = this.onCreateSubBudget.bind(this)
  }

  onCreateSubBudget(budget) {
    let subBudgetAmount = budget.sub_budgets[budget.sub_budgets.length - 1].amount
    let newBudgetTotal = budget.total - subBudgetAmount
    this.setState({subBudgets: budget.sub_budgets, budgetTotal: newBudgetTotal})
    this.props.onCreateSubBudget(newBudgetTotal)
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <Overview total={this.state.budgetTotal} originalTotal={this.props.budget.originalTotal}/>
        <SubBudgetList handleSubbudgetDelete={this.props.handleSubbudgetDelete} subBudgets={this.props.subBudgets} onSelectSubBudget={this.props.onSelectSubBudget}/>
        <NewSubBudget onCreateSubBudget={this.onCreateSubBudget.bind(this)}/>
      </div>
    )
  }
}

export default Sidebar
