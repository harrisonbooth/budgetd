import React from 'react'
import Header from '../components/Header'
import {browserHistory} from 'react-router'

class BudgetContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      budget: null
    }
  }

  componentDidMount() {
    var url = 'http://localhost:5000/budget'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { budget: data } )
      } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
      }
    }
    request.send(null)

  }

  render() {
    if(!this.state.budget){
      return (
        <div className="loading">
          loading...
        </div>
      )
    }

    return (
      <div className='budget-container'>
        <Header budget={this.state.budget}/>
        <Sidebar budget={this.state.budget}/>
        <div className='subbudget-window'>

        </div>
      </div>
    )
  }
}

export default BudgetContainer
