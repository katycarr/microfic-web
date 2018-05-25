import { EditorState } from 'draft-js'

const initialState = {
  story: EditorState.createEmpty()
}

export function editorStateReducer(state=initialState, action) {
  switch(action.type) {
    case 'UPDATE':
      return { story: action.payload}
    case 'CLEAR':
      return { story: EditorState.createEmpty() }
    default:
      return state
  }
}
