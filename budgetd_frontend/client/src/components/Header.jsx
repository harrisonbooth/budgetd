import React from 'react'
import SignOut from '../auth/SignOut'
import BudgetBar from './BudgetBar'
import ResetBudgets from '../components/ResetBudgets'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className='header'>
        <h1 id="logo">Budget'd</h1>
        <BudgetBar maxWidth={500} total={this.props.budgetTotal} originalTotal={this.props.budget.originalTotal}/>
        <ResetBudgets onResetBudgets={this.props.onResetBudgets}/>
        <SignOut url='http://localhost:5000/users/sign_out'/>
      </header>
    )
  }
}

export default Header
