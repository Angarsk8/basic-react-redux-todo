import * as types from '../constants'

let next = 0

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    id: next++,
    text
  }
}

export function toggleTodo(id) {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}
