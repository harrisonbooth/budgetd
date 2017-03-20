import React from 'react'

class SignIn extends React.Component {

  constructor(props) {
    super(props)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.signIn = this.signIn.bind(this)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  signIn(event){
    event.preventDefault()

    const request = new XMLHttpRequest()
    request.open('POST', this.props.url)
    request.setRequestHeader('content-type', 'application/json')
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 201){
        const user = JSON.parse(requets.resonseText)
        this.props.onSignIn(user)
      }
    }

    request.send(JSON.stringify({
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }))
  }

  render() {
    return (
      <form  className='login-form' >
        <input type="text" onChange={this.handleOnChangeEmail}  placeholder="Email" />
        <input type="password" onChange={this.handleOnChangePassword}  placeholder="Password" />
        <button onClick={this.signIn}>  Sign In </button>
      </form>
    )
  }
}

export default SignIn
