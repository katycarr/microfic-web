import React from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const style = {
  editor: {
    height: '300px',
    border: '1px solid black',
  }
}
class StoryInput extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  onChange = editorState => {
    this.setState({editorState})
  }

  focus = () => {
    this.editor.focus();
  };


  render() {
    return (
      <div style={style.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[inlineToolbarPlugin]}
          ref={(element) => { this.editor = element; }}
          />
        <InlineToolbar />
      </div>
    )
  }
}

export default StoryInput
