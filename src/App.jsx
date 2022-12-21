import React, { useEffect } from 'react'
import './App.css'
import Unauthorized from './pages/Unauthorized/Unauthorized'
import Authorized from './pages/Authorized/Authorized'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { authenticate } from './actions'
import { Route } from 'react-router-dom'

function App(props) {
  const {isLoggedIn, authenticate} = props

  App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  }

  useEffect(() => {
    const password = localStorage.getItem('loft-pass')
    const email = localStorage.getItem('loft-email')

    if (email && password) authenticate(email, password)
  },[authenticate])
  
  return (
    <div className='wrapper'>
      {
        isLoggedIn
        ? <Route path='/' component={Authorized} />
        : <Route path='/' component={Unauthorized} />
      }
    </div>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.AuthReducer.isLoggedIn}),
  { authenticate }
)(App)
