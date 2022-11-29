import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegistrForm from './RegistrForm'
import PropTypes from 'prop-types'


function AuthForm(events) {
  const {formSend} = events

  AuthForm.propTypes = {
    formSend: PropTypes.func.isRequired
  }
  
  const [isLogin, setIsLogin] = useState(true)

  function send(e){
    e.preventDefault()
    let send_obj = { sendType: isLogin ? 'LoginForm' : 'RegistrForm' }
    e.target.querySelectorAll('input').forEach(el => send_obj[el.name] = el.value);

    (typeof formSend === 'function') && formSend(send_obj)
  }

  return (  
    <form className='auth__form' onSubmit={send}>
      {
      isLogin 
      ? <LoginForm changeSing={() => setIsLogin(prev => !prev)} /> 
      : <RegistrForm changeSing={() => setIsLogin(prev => !prev)} />
      }
    </form>
  )
}

export default AuthForm
