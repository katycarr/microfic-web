import React from 'react'
import {Modal, Button} from 'semantic-ui-react'
import StoryInput from './StoryInput'

class ModalWrapper extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    const className = this.props.isOpen ? '' : 'grow'
    return (
      <div className={className}>
        <Modal
          size='large'
          trigger={<Button icon='maximize' className='modal-button' />}
          onOpen={() => this.setState({isOpen:true})}
          onClose={() => this.setState({isOpen:false})}>
          <StoryInput />
        </Modal>
        {this.state.isOpen ? null : <StoryInput />}
      </div>
    )
  }
}

export default ModalWrapper
