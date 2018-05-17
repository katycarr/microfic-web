import React from 'react'
import { connect } from 'react-redux'
import { fetchStories } from '../../actions/fics'
import StoryPager from './Pager'


class StoryIndexContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchStories()
  }

  render() {
    if (this.props.fics.length > 0) {
      return(
        <StoryPager />
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    fics: state.ficsReducer.all
  }
}

export default connect(mapStateToProps, {fetchStories})(StoryIndexContainer)
