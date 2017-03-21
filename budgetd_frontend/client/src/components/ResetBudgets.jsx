import React from 'react'

class ResetBudgets extends React.Component {

  constructor() {
    super()
    this.reset = this.reset.bind(this)
  }

  reset(event) {
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open('DELETE', 'http://localhost:5000/budget/subBudgets/reset')
    request.setRequestHeader('Content-type', 'application/json')
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        console.log(this.props.onResetBudgets);
        this.props.onResetBudgets()
      }
    }

    request.send(null)
  }

  render() {
    return (
      <div>
        <button className="reset-button" onClick={this.reset}>Reset budgets</button>
      </div>
    )
  }

}

export default ResetBudgets
