import React from "react"
import Header from "../../components/Header/Header"

function Profile({ onNav }) {

  return (
    <>
    <Header onNav={onNav} />
    <div>Profile Page</div>
    </>
  )
}

export default Profile