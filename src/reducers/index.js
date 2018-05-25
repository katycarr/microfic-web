import { combineReducers } from 'redux'
import { ficsReducer } from './fics'
import { authReducer } from './auth'
import { editorStateReducer } from './editorState'

const rootReducer = combineReducers({
  ficsReducer,
  authReducer,
  editorStateReducer
})

export default rootReducer
