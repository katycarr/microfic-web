import React from 'react'
import {Modal, Button} from 'semantic-ui-react'
import StoryInput from './StoryInput'

class ModalWrapper extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <div>
        <Modal
          trigger={<Button>Modal</Button>}
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
