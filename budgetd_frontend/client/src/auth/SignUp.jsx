import React from 'react'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.signUp = this.signUp.bind(this)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangeFirstname = this.handleOnChangeFirstname.bind(this)
    this.handleOnChangeSurname = this.handleOnChangeSurname.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnChangePassConf = this.handleOnChangePassConf.bind(this)
    this.state = {
      email:"",
      firstname: "",
      surname: "",
      password:"",
      passwordConfirmation:""
    }
  }

  signUp(event){
    event.preventDefault()

    const request = new XMLHttpRequest();
    request.open('POST', this.props.url)
    request.setRequestHeader('Content-type', 'application/json')
    request.withCredentials= true

    request.onload = () => {
      if(request.status === 201){
        const user = JSON.parse(request.responseText)
        this.props.onSignUp(user)
      }
    }

    request.send(JSON.stringify({
      user: {
        email: this.state.email,
        firstname: this.state.firstname,
        surname: this.state.surname,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      }
    }))
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangeFirstname(event) {
    this.setState({firstname: event.target.value})
  }

  handleOnChangeSurname(event) {
    this.setState({surname: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  handleOnChangePassConf(event) {
    this.setState({passwordConfirmation: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.signUp} className='login-form'>
        <input type="text" onChange={this.handleOnChangeEmail}  placeholder="Email" />
        <input type="text" onChange={this.handleOnChangeFirstname} placeholder="Firstname"/>
        <input type="text" onChange={this.handleOnChangeSurname} placeholder="Surname"/>
        <input type="password" onChange={this.handleOnChangePassword}  placeholder="Password" />
        <input type="password" onChange={this.handleOnChangePassConf}  placeholder="Password Confirmation" />

        <button onClick={this.signUp}>  Sign Up </button>
      </form>
    )
  }
}

export default SignUp
