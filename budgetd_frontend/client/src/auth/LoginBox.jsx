import React from 'react'
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
  }

}

export default LoginBox
