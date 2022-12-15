import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import loginLogo from '../../assets/images/logo-login.svg'
import './unauthorized.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authenticate } from '../../actions'

function Unauthorized({ authenticate }) {
  // const {authenticate, registration} = events

  Unauthorized.propTypes = {
    authenticate: PropTypes.func.isRequired
  }

  function send(e) {
    authenticate(e.email, e.password)
  }

  return (  
    <div className="login">
    <div className="login__left">
      <div className="login__left--logo">
        <img src={loginLogo} alt="Logo" />
      </div>
    </div>
    <div className="login__right">
      <AuthForm formSend={send} />
    </div>
  </div>
  )
}

export default connect(
  null,
  { authenticate }
)(Unauthorized)
