import React from 'react'
import './App.css'
import Unauthorized from './pages/Unauthorized/Unauthorized'
import Authorized from './pages/Authorized/Authorized'
import { WithAuth } from './contexsts/AuthContext'
import PropTypes from 'prop-types'

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

export default WithAuth(App)
