import React from 'react'
import Editor from 'draft-js-plugins-editor'
import 'draft-js/dist/Draft.css'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import './EditorStyle.css'
import {Form} from 'semantic-ui-react'
import {updateEditor, clearEditor} from '../../actions/editor'
import {connect} from 'react-redux'

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;


class StoryInput extends React.Component {
  state = {
    focused: false
  }
  onChange = editorState => {
    this.props.updateEditor(editorState)
  }

  render() {
    return (
      <Form.Field className={`editor-wrapper ${this.state.focused ? 'focused' : 'blurred'}`} onClick={this.focus}>
        <Editor
          placeholder='Story'
          onFocus={() => this.setState({ focused: true })}
          editorState={this.props.editorState}
          onChange={this.onChange}
          plugins={[inlineToolbarPlugin]}
          spellCheck={true}
          />
        <InlineToolbar />
      </Form.Field>
    )
  }
}

function mapStateToProps(state) {
  return {
    editorState: state.editorStateReducer.story
  }
}

export default connect(mapStateToProps, {updateEditor, clearEditor})(StoryInput)
