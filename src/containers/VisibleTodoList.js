import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

function getVisibleTodos(todos, filter) {
  switch (filter) {
  case 'SHOW_ALL':
    return todos
  case 'SHOW_COMPLETED':
    return todos.filter(todo => todo.completed)
  case 'SHOW_ACTIVE':
    return todos.filter(todo => !todo.completed)
  default:
    return todos
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

function mapActionsToProps(dispatch) {
  return {
    onTodoClick(id) {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapActionsToProps
)(TodoList)

export default VisibleTodoList
