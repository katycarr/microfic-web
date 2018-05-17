import React from 'react'
import { Container } from 'semantic-ui-react'

const styles = {
  container: {
    width: '80%',
    margin: 'auto',
    height: '100vh',
  }
}


class StoryIndexView extends React.Component {
  handlePress = () => {

  }

  render() {
    return (
        <Container style={styles.container}>
          <h1>{this.props.story.title}</h1>
          <p>{this.props.story.summary}</p>
          <div>{this.props.story.story}</div>
          <h5>By {this.props.story.user.username}</h5>
        </Container>
    )
  }
}

export default StoryIndexView
