import React from 'react'
import './loginForm.scss'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

function RegistrForm(events) {
  const {changeSing} = events

  RegistrForm.propTypes = {
    changeSing: PropTypes.func.isRequired
  }
  
  return (  
    <div className='form'>
      <span className="form__title">Регистрация</span>
      <label className="form__item">
        <span className="form__item--text">Email*</span>
        <input className="form__item--value" placeholder="mail@mail.ru" name='mail' type="email"></input>
      </label>
      <label className="form__item">
        <span className="form__item--text">Как вас зовут?*</span>
        <input className="form__item--value" placeholder="Петр Александрович" name='username' type="text"></input>
      </label>
      <label className="form__item">
        <span className="form__item--text">Придумайте пароль*</span>
        <input className="form__item--value" placeholder="*************" name='password' type="password"></input>
      </label>
      <Button className="form__button" type="submit">Зарегистрироваться</Button>
      <div className="form__registration">
        <span className="form__registration--text">Уже зарегестрированны?</span>
        <span className="form__registration--registr" onClick={changeSing}>Войти</span>
      </div>
    </div>
  )
}

export default RegistrForm