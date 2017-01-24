import React, { PropTypes } from 'react'

function Todo({ text, completed, onClick }) {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : '' }}
    >
      {text}
    </li>
  )
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
