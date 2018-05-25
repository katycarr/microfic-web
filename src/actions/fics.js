import { convertToRaw } from 'draft-js'

export const fetchStories = () => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_STORIES_START'
    })
    fetch('http://localhost:3000/fics')
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'FETCH_STORIES_DONE',
          payload: json
        })
      })
  }
}

export const createFic = ({title, summary}, editorState, draft=false) => {
  const story = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
  return(dispatch) => {
    dispatch({
      type: 'CREATE_FIC_START'
    })
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({fic: {title, summary, story, 'draft?':draft}})
    }
    fetch('http://localhost:3000/fics', options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'CREATE_FIC_DONE',
          payload: json
        })
      })
  }
}
