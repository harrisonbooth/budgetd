# React and Rails Budgdet App
## Budget'd
### A personal budget tracking app with the ability to add sub-budgets and transactions.
  - Backend (Rails)
    * Database with tables for users, budgets, sub-budgets, and transactions.
    * Authentication for users to make their own accounts with budgets.
    * Data presented in an API for use by the frontend.
  - Frontend
    * Sign in/sign up page.
    * If new user, prompt to create new budget.
    * Header, displaying budget progress bar and sign-out button.
    * Sidebar, displaying budgte overview and sub-budget list, as well as new sub-budget form.
    * Sub-budget window, displaying selected sub-budget overview and transactions, as well as new transaction form.

---

### Known Bugs
  - Budget overview not updating unallocated funds when deleting sub-budget until refresh of page.
  - Ability to put in amount larger than the budget causing negative values.
  
--- 

### Dependecies
  - Webpack
  - Rails
    * Postgres
    * Devise
  - Express
  - React
  - Babel
