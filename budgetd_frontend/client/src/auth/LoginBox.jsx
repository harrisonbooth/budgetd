import React from 'react'
import {Link} from 'react-router'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignOut from './SignOut'

class LoginBox extends React.Component {

  constructor(props) {
    super(props)
    this.setUser = thsi.setUser.bind(this)
    this.state = {
      currentUser: null
    }
  }

  setUser(user) {
    this.setState({currentUser:user, favlist: []})
  }

  fetchUser() {
    const request = new XMLHttpRequest()
    request.open('GET', this.props.url + 'users.json')
    request.setRequestHeader('content-type', 'application/json')
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        const receivedUser = JSON.parse(request.resonseText)
        this.setUser(receivedUser)
      } else if(request.status === 401){
        this.setUser(null)
      }
    }

    request.send(null)
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    if(this.state.currentUser){
      const children = <div>
        <h4>Welcome back, this.state.currentUser.firstname.</h4>
        <Link className='logged-in-link' to='/budget'>View your budget</Link>
      </div>
    } else {
      const children = <div>
        <h4>Please sign in</h4>
        <SignIn url={this.props.url + 'users/sign_in.json'} onSignIn={this.setUser}/>
        <p>New to Budget'd? Sign up here</p>
        <SignUp url={this.props.url + 'users.json'} onSignUp={this.setUser}/>
      </div>
    }

    return (
      <div>
        {children}
      </div>
    )
  }

}

export default LoginBox
