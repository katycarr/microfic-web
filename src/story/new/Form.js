import React from 'react'
import { connect } from 'react-redux'
import { createFic } from '../../actions/fics'
import { Form, TextArea, Button } from 'semantic-ui-react'
import ModalWrapper from './ModalWrapper'
import './Form.css'

class NewStoryForm extends React.Component {
  state = {
    title: '',
    summary: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createFic(this.state, this.props.editorState)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  saveDraft = () => {
    this.props.createFic(this.state, this.props.editorState, true)
  }

  render() {
    return (
      <Form>
        <input
          className='form-field'
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          />
        <TextArea
          className='form-field'
          placeholder='Summary'
          value={this.state.summary}
          onChange={this.handleChange}
          name='summary'
          autoHeight
          />
        <ModalWrapper />
        <div className='button-container'>
          <Button onClick={this.handleSubmit}>Publish</Button>
          <Button onClick={this.saveDraft}>Save Draft</Button>
        </div>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
    editorState: state.editorStateReducer.story
  }
}


export default connect(mapStateToProps, {createFic})(NewStoryForm)
