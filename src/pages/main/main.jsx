import React from "react"
import Header from "../../components/Header/Header"
import './main.scss'

function Main({ onNav }) {
  return (
    <div>
      <Header onNav={onNav} />
      <div className="main__content">Main page</div>
    </div>
  )
}

export default Main