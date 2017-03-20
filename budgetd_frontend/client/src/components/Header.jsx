import React from 'react'
import SignOut from '../auth/SignOut'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='header'>
        <SignOut url='http://localhost:5000/users/sign_out'/>
      </div>
    )
  }
}

export default Header
