import * as types from '../constants'

function  todo(state = {}, action) {
  switch (action.type) {
  case types.ADD_TODO:
    return {
      id: action.id,
      text: action.text,
      completed: false
    }
  case types.TOGGLE_TODO:
    if (action.id !== state.id) {
      return state
    }
    return { ...state, completed: !state.completed }
  default:
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case types.ADD_TODO:
    return [ ...state, todo(undefined, action) ]
  case types.TOGGLE_TODO:
    return state.map(_todo => todo(_todo, action))
  default:
    return state
  }
}

export default todos
