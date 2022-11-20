import React, { useState } from 'react'
import './App.css'
import Login from './pages/login/login'
import RegistrationForm from './pages/registration/registrationForm'
import Main from './pages/main/main'
import Profile from './pages/profile/profile'

function App() {

  const [currentPage, setPage] = useState('login')

  const navTo = (page) => {
    setPage(page)
  }

  const pages = {
    login: <Login onNav={navTo} />,
    registr: <RegistrationForm onNav={navTo} />,
    main: <Main onNav={navTo} />,
    profile: <Profile onNav={navTo} />
  }

  return pages[currentPage]
}

export default App;
