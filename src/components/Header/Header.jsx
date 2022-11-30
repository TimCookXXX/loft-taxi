import React from 'react'
import './header.scss'
import logoMain from '../../assets/images/logo-main.svg'
import PropTypes from 'prop-types'

function Header(events) {
  const {clickNavItem, activeContent} = events
  
  Header.propTypes = {
    clickNavItem: PropTypes.func.isRequired,
    activeContent: PropTypes.string.isRequired
  }

    const navList = [
      {name: 'map', value: 'Карта'},
      {name: 'profile', value: 'Профиль'},
      {name: 'out', value: 'Выйти'}
    ]
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logoMain} alt="Logo" />
      </div>
      <ul className='header__navlist'>
        {navList.map((el, i) => (
        <li
        key={i}
        data-active={activeContent === el.name}
        className="header__navitem"
        onClick={() => clickNavItem(el)}
        >{el.value}</li>
        ))}
      </ul>
    </header>
  )
}

export default Header