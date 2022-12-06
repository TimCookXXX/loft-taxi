import React from 'react'
import './header.scss'
import logoMain from '../../assets/images/logo-main.svg'
import PropTypes from 'prop-types'
import {Link, Switch, Route} from 'react-router-dom'
// import Profile from '../Profile/Profile'
import Map from '../Map/Map'
import { PrivateRoute } from '../../PrivateRoute'

function Header(events) {
  const {clickNavItem, activeContent} = events
  
  Header.propTypes = {
    clickNavItem: PropTypes.func.isRequired,
    activeContent: PropTypes.string.isRequired
  }

    const navList = [
      {name: 'map', value: 'Карта', to: '/map'},
      {name: 'profile', value: 'Профиль', to: '/profile'},
      {name: 'out', value: 'Выйти', to: '/'}
    ]
  return (
    <>
    <header className='header'>
      <div className='header__logo'>
        <img src={logoMain} alt="Logo" />
      </div>
      <ul className='header__navlist'>
        {navList.map((el, i) => (
        <Link to={el.to}
        key={i}
        data-active={activeContent === el.name}
        className="header__navitem"
        onClick={() => clickNavItem(el)}
        >{el.value}</Link>
        ))}
      </ul>
    </header>
    <Switch>
        <PrivateRoute path='/map' component={Map} />
        <Route path='/' />
    </Switch>
    </>
  )
}

export default Header