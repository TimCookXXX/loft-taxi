import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import loginLogo from '../../assets/images/logo-login.svg'
import './unauthorized.scss'
import { WithAuth } from '../../contexsts/AuthContext'
import PropTypes from 'prop-types'

function Unauthorized(events) {
  const {logIn} = events

  Unauthorized.propTypes = {
    logIn: PropTypes.func.isRequired
  }

  function send(e) {
    logIn(e.mail, e.password).catch(err => {alert('Не верный логин или пароль')})
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

export default WithAuth(Unauthorized)
