import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Map from '../../components/Map/Map'
import Profile from '../../components/Profile/Profile'
import { WithAuth } from '../../contexsts/AuthContext'
import './authorized.scss'
import PropTypes from 'prop-types'

function Authorized(events) {
  const {logOut} = events

  const [content, setContent] = useState('map')

  Authorized.propTypes = {
    logOut: PropTypes.func.isRequired
  }
  
  const pages = {
    map: <Map />,
    profile: <Profile />
  }

  function clickNavItemFunc(e) {
    if(e.name === 'out') logOut()
    else setContent(e.name)
  }
  return (  
    <div className='main'>
      <Header clickNavItem={clickNavItemFunc} activeContent={content} />
      {pages[content]}
    </div>
  )
}

export default WithAuth(Authorized) 