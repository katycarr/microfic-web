import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class UserAuthContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    nextProps.user && this.props.history.push('/')
  }

  render() {
    return(
      <div >
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user
  }
}

export default compose(withRouter, connect(mapStateToProps))(UserAuthContainer)
