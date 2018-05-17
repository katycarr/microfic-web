import React from 'react'
import UserAuthContainer from './auth/Container'
import UserAuthForm from './auth/Form'
import { loginUser } from '../actions/auth'
import { connect } from 'react-redux'





class LoginScreen extends React.Component {
  render() {
    return(
      <UserAuthContainer>
        <UserAuthForm
          fields={['username','password']}
          handleSubmit={(value) => this.props.loginUser(value)}
        />
      </UserAuthContainer>
    )
  }
}

export default connect(null, {loginUser})(LoginScreen)
