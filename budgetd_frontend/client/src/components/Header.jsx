import React from 'react'
import SignOut from '../auth/SignOut'
import BudgetBar from './BudgetBar'
import ResetBudgets from '../components/ResetBudgets'

const Header = (props) => {
  return (
    <header className='header'>
      <h1 id="logo">Budget'd</h1>
      <BudgetBar maxWidth={500} total={props.budgetTotal} originalTotal={props.budget.originalTotal}/>
      <ResetBudgets onResetBudgets={props.onResetBudgets}/>
      <SignOut url='http://localhost:5000/users/sign_out'/>
    </header>
  )
}

export default Header
