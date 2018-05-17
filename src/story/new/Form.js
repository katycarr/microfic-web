import React from 'react'
import { connect } from 'react-redux'
import { createFic } from '../../actions/fics'
import { Form, TextArea, Button } from 'semantic-ui-react'
import StoryInput from './StoryInput'

class NewStoryForm extends React.Component {
  state = {
    title: '',
    summary: '',
    story: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createFic(this.state)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          />
        <TextArea
          placeholder='Summary'
          value={this.state.summary}
          onChange={this.handleChange}
          name='summary'
          autoHeight
          />
        {// <TextArea
        //   placeholder='Story'
        //   value={this.state.story}
        //   onChange={this.handleChange}
        //   name='story'
        //   autoHeight
        //   style={{minHeight: '300px'}}
        //   />
      }
        <StoryInput />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}


export default connect(null, {createFic})(NewStoryForm)
