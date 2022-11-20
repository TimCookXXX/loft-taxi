import React from "react"
import './registrationForm.scss'

function RegistrationForm({ onNav }) {
  const handleSubmit = event => event.preventDefault()
  const navTo = (page) => () => onNav(page)
  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="form__title">Регистрация</span>
      <label className="form__item">
        <span className="form__item--text">Email*</span>
        <input className="form__item--value" placeholder="mail@mail.ru" type="text"></input>
      </label>
      <label className="form__item">
        <span className="form__item--text">Как вас зовут?*</span>
        <input className="form__item--value" placeholder="Петр Александрович" type="text"></input>
      </label>
      <label className="form__item">
        <span className="form__item--text">Придумайте пароль*</span>
        <input className="form__item--value" placeholder="*************" type="password"></input>
      </label>
      <button className="form__button" type="submit" onClick={navTo('main')}>Зарегистрироваться</button>
      <div className="form__registration">
        <span className="form__registration--text">Уже зарегестрированны?</span>
        <button className="form__registration--registr" onClick={navTo('login')}>Войти</button>
      </div>
    </form>
  )
}

export default RegistrationForm