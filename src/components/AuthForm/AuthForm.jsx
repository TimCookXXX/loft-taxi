import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegistrForm from './RegistrForm'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { registration } from '../../actions'


function AuthForm(events) {
  const {formSend, registration} = events

  AuthForm.propTypes = {
    formSend: PropTypes.func.isRequired
  }
  
  const [isLogin, setIsLogin] = useState(true)

  
  function loginSend(e){
    e.preventDefault()
    let send_obj = { sendType: isLogin ? 'LoginForm' : 'RegistrForm' }
    e.target.querySelectorAll('input').forEach(el => send_obj[el.name] = el.value);

    (typeof formSend === 'function') && formSend(send_obj)
  }

  function regSend(e){
    e.preventDefault();

        const userEmail = e.target.userEmail ? e.target.userEmail.value : null;
        const userPassword = e.target.userPassword ? e.target.userPassword.value : null;
        const fullUserName = e.target.userName ? e.target.userName.value : null;

        let name, surname;

        if (fullUserName) {
            [name, surname] = fullUserName.split(' ', 2);
        }

        registration(userEmail, userPassword, name, surname);
  }

  function handleSubmit(e) {
    if(window.location.pathname === '/') {
      loginSend(e)
    } else {
      regSend(e)
    }
  }

  return (  
    <form className='auth__form' onSubmit={handleSubmit}>
      <Switch>
        <Route path='/registration' component={RegistrForm} />
        <Route path='*' component={LoginForm} />
      </Switch>
    </form>
  )
}

export default connect(null, { registration }) (AuthForm)
