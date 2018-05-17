
export const logout = () => {
  localStorage.removeItem('token')
  return {
    type: 'LOGOUT_DONE'
  }
}

export const getUser = (token) => {
  return (dispatch) => {
    fetch('http://localhost:3000/get_user', {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(json => {
      if (json["error"]) {
        console.log(json)
      } else {
        dispatch({
          type: 'GET_USER_DONE',
          payload: json
        })
      }
    })
  }
}

export const loginUser = ({username, password}) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN_START'
    })
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({username, password})
    }
    fetch('http://localhost:3000/login', options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        localStorage.setItem('token', json.token)
        dispatch({
          type: 'GET_USER_DONE',
          payload: json.user
        })
      })
  }
}

export const signupUser = ({username, password}) => {
  return (dispatch) => {
    dispatch({
      type: 'SIGNUP_START'
    })
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({user: {username, password}})
    }
    fetch('http://localhost:3000/signup', options)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem(json.token)
        dispatch({
          type: 'GET_USER_DONE',
          payload: json.user
        })
      })
  }
}
