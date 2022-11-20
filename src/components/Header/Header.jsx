import React from 'react'
import './header.scss'
import logoHeader from '../../assets/images/logo.svg'

function Header({ onNav }) {
  const navTo = (page) => () => onNav(page)
  return (
    <div className='header'>
      <div className="header__left">
        <img className="header__logo" onClick={navTo('main')} src={logoHeader} alt="logo" />
        <div className="header__title">
          <span className="header__title--loft">loft</span>
          <span className="header__title--taxi">taxi</span>
        </div>
      </div>
      <ul className="header__right">
        <li className="header__item">
          <button className="header__item--text" onClick={navTo('main')}>Карта</button>
        </li>
        <li className="header__item">
          <button className="header__item--text" onClick={navTo('profile')}>Профиль</button>
        </li>
        <li className="header__item">
          <button className="header__item--text" onClick={navTo('login')}>Выйти</button>
        </li>
      </ul>
    </div>
  )
}

export default Header