import React, { PropTypes } from 'react'

function Link({ active, onClick, children }) {
  if (active) {
    return <span>{children}</span>
  }
  
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.PropTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
