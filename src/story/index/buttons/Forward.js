import React from 'react'
import {Button} from 'semantic-ui-react'
import { pageForward } from '../../../actions/paginate'
import { connect } from 'react-redux'

class ForwardButton extends React.Component {

  render() {
    return(
      <Button
        className='paginate forward'
        onClick={this.props.pageForward}
        icon='right arrow'
        basic
        circular
        />
    )
  }
}

export default connect(null, {pageForward})(ForwardButton)
