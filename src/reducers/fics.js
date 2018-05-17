const initialState = {
  all: [],
  page: 0,
}

export function ficsReducer(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_STORIES_DONE':
      return {...state, all: action.payload}
    case 'CREATE_FIC_DONE':
      return {...state, all: [...state.all, action.payload]}
    case 'PAGE_FORWARD':
      return {...state, page: state.page+1}
    case 'PAGE_BACKWARD':
      return {...state, page: state.page-1}
    default:
      return {...state}
  }
}
