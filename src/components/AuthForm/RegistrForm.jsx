import React from 'react'
import './loginForm.scss'
import Button from '../../ui/Button'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Field, ErrorMessage } from 'formik'
// import { connect } from 'react-redux'
// import { registration } from '../../actions'

function RegistrForm(events) {
  return (  
    <div className='form'>
      <span className="form__title">Регистрация</span>
      <label className="form__item">
        <span className="form__item--text">Email*</span>
        <Field className="form__item--value" placeholder="mail@mail.ru" name='userEmail' type="userEmail" />
        <ErrorMessage name='userEmail' />
      </label>
      <label className="form__item">
        <span className="form__item--text">Как вас зовут?*</span>
        <Field className="form__item--value" placeholder="Петр Александрович" name='userName' type="userName" />
        <ErrorMessage name='userName' />
      </label>
      <label className="form__item">
        <span className="form__item--text">Придумайте пароль*</span>
        <Field className="form__item--value" placeholder="*************" name='userPassword' type="userPassword" />
        <ErrorMessage name='userPassword' />
      </label>
      <Button className="form__button" type="submit">Зарегистрироваться</Button>
      <div className="form__registration">
        <span className="form__registration--text">Уже зарегестрированны?</span>
        <Link to='/' className="form__registration--registr">Войти</Link>
      </div>
    </div>
  )
}

export default RegistrForm