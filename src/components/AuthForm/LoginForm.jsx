import React from 'react'
import './loginForm.scss'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

function LoginForm(events) {
  const {changeSing} = events

  LoginForm.propTypes = {
    changeSing: PropTypes.func.isRequired
  }
  
  return (  
      <div className="form">
        <span className="form__title">Войти</span>
        <label className="form__item">
          <span className="form__item--text">Email</span>
          <input className="form__item--value" name='mail' placeholder="mail@mail.ru" type="email"></input>
        </label>
        <label className="form__item">
          <span className="form__item--text">Пароль</span>
          <input className="form__item--value" placeholder="*************" name='password' type="password"></input>
        </label>
        <Button className="form__button" type="submit">Войти</Button>
        <div className="form__registration">
          <span className="form__registration--text">Новый пользователь?</span>
          <span className="form__registration--registr" onClick={changeSing}>Регистрация</span>
        </div>
      </div>
  )
}

export default LoginForm