import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Map from '../../components/Map/Map'
import Profile from '../../components/Profile/Profile'
import './authorized.scss'
import { PrivateRoute } from '../../PrivateRoute'
import { connect } from 'react-redux'
import { logOut } from '../../actions'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

function Authorized(events) {
  const {logOut} = events

  const [content, setContent] = useState('map')

  Authorized.propTypes = {
    logOut: PropTypes.func.isRequired
  }
  
  function clickNavItemFunc(e) {
    if(e.name === 'out') logOut()
    else setContent(e.name)
  }
  return (  
    <div className='main'>
      <Header clickNavItem={clickNavItemFunc} activeContent={content} />
      <div className='main__content'>
        <Map />
        <Switch>
          <PrivateRoute path='/profile' component={Profile} />
          <Route path='/' />
        </Switch>
      </div>
    </div>
  )
}

export default connect(
  null,
  { logOut }
)(Authorized)