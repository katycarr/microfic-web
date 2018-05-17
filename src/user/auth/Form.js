import React from 'react'

class UserAuthForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handlePress = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
      <form onSubmit={this.handlePress}>
        <input onChange={this.handleChange} name='username' type='text' placeholder='username' value={this.state.username} />
        <input onChange={this.handleChange} name='password' type='password' placeholder='password' value={this.state.password} />
        <input type='submit' name='Submit' />
      </form>
    )
  }
}

export default UserAuthForm
