import React from 'react'
import './button.scss'
// import PropTypes from 'prop-types'

function Button(events) {
  const {type='button', children, ...props} = events
  // Button.propTypes = {
  //   type: PropTypes.string.isRequired,
  //   children: PropTypes.string.isRequired
  // }
  return (  
    <button {...props} type={type} className="btn">
      {children}
    </button>
  )
}

export default Button
