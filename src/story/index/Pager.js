import React from 'react'
import StoryIndexView from './View'
import { connect } from 'react-redux'
import BackButton from './buttons/Back'
import ForwardButton from './buttons/Forward'
import './PagerStyle.css'

class StoryPager extends React.Component {

  render() {
    const currentStory = this.props.fics[this.props.page]

    return (
      <div>
        {this.props.page !== 0 && <BackButton />}
        {this.props.page !== this.props.fics.length-1 && <ForwardButton />}
        <StoryIndexView story={currentStory} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.ficsReducer.page,
    fics: state.ficsReducer.all
  }
}

export default connect(mapStateToProps)(StoryPager)
