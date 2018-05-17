import React from 'react'
import {Button} from 'semantic-ui-react'
import { pageBackward } from '../../../actions/paginate'
import { connect } from 'react-redux'


class BackButton extends React.Component {

  render() {
    return(
      <Button
        className='paginate back'
        onClick={this.props.pageBackward}
        icon='left arrow'
        basic
        circular
        />
    )
  }
}

export default connect(null, {pageBackward})(BackButton)
