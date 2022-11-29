import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const logIn = (email, password) => new Promise((resolve, reject) => {
    if (email !== 'test@gmail.com' || password !== '123456') return reject('fail')

    resolve('success')
    setLoggedIn(true)
  })

  const logOut = () => setLoggedIn(false)

  const providerVar = {
    isLoggedIn, logIn, logOut
  }

  return (
    <>
      <AuthContext.Provider value={providerVar}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export const WithAuth = (WrapComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(value) => <WrapComponent {...value} {...this.props} />}
        </AuthContext.Consumer>
      )
    }
  }
}