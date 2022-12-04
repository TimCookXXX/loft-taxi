import React from 'react'
import './App.css'
import Unauthorized from './pages/Unauthorized/Unauthorized'
import Authorized from './pages/Authorized/Authorized'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function App(props) {
  const {isLoggedIn} = props

  App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  }
  
  return (
    <div className='wrapper'>
      {
        isLoggedIn
        ? <Authorized />
        : <Unauthorized />
      }
    </div>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.AuthReducer.isLoggedIn})
)(App)
