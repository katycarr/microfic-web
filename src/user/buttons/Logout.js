import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { withRouter } from 'react-router-dom'
import {compose} from 'redux'
import { Button } from 'semantic-ui-react'

class LogoutButton extends React.Component {
  handleClick = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  render() {
    return (
      <Button color='teal'
        onClick={this.handleClick}
      >
      Logout
    </Button>
    )
  }
}

export default compose(withRouter,connect(null, {logout}))(LogoutButton)
