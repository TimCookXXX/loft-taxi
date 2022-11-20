import React from "react"
import './login.scss'
import loginLogo from '../../assets/images/logo-login.svg'

function Login({ onNav }) {
  const handleSubmit = event => event.preventDefault()
  const navTo = (page) => () => onNav(page)

  return (
    <div className="login">
      <div className="login__left">
        <div className="login__left--logo">
          <img src={loginLogo} alt="Logo" />
        </div>
      </div>
      <div className="login__right">
        <form className="form" onSubmit={handleSubmit}>
          <span className="form__title">Войти</span>
          <label className="form__item">
            <span className="form__item--text">Email</span>
            <input className="form__item--value" placeholder="mail@mail.ru" type="text"></input>
          </label>
          <label className="form__item">
            <span className="form__item--text">Пароль</span>
            <input className="form__item--value" placeholder="*************" type="password"></input>
          </label>
          <button className="form__button" type="submit" onClick={navTo('main')}>Войти</button>
          <div className="form__registration">
            <span className="form__registration--text">Новый пользователь?</span>
            <button className="form__registration--registr" onClick={navTo('registr')}>Регистрация</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login