import React from 'react'
import { Container } from 'semantic-ui-react'
import { convertFromRaw, EditorState, Editor } from 'draft-js'

class StoryIndexView extends React.Component {

  render() {
    let story = <Editor
        editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.story.story)))}
        readOnly={true}
        />
    return (
        <Container>
          <h1>{this.props.story.title}</h1>
          <p>{this.props.story.summary}</p>
          <div className='story-container'>
            {story}
          </div>
          <h5>By {this.props.story.user.username}</h5>
        </Container>
    )
  }
}

export default StoryIndexView
