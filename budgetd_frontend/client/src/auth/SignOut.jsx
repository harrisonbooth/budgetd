import React from 'react'
import { Link, browserHistory } from 'react-router'

class SignOut extends React.Component{

  constructor(){
    super()
    this.signOut = this.signOut.bind(this)
  }

  signOut(event){
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open('DELETE', this.props.url)
    request.setRequestHeader('Content-type', 'application/json')
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 204){
        browserHistory.goBack()
      }
    }

    request.send(null)
  }

  render() {
    return (
       <div className="sign-out-wrapper">
        <button className="sign-out-button" onClick={this.signOut}>Sign Out</button>
      </div>
    )
  }
}

export default SignOut
