import React from 'react'
import './profile.scss'

function Profile(events) {
  return (  
    <div className='profile'>
      <div className='profille__title'>Профиль</div>
      <div className='profile__info'>Введите платежные данные</div>
      <div className='profile__payinfo'>
        <form>
          <label>
            <span>Имя владельца</span>
            <input type="text" placeholder='Name Surname' />
          </label>
          <label>
            <span>Номер карты</span>
            <input type="number" placeholder='1234 5678 9101 1121' />
          </label>
          <label>
            <span>MM/YY</span>
            <input type="number" placeholder='10/08' />
          </label>
          <label>
            <span>CVC</span>
            <input type="number" placeholder='***' />
          </label>
        </form>
        <div className='profile__card'>
          111
        </div>
      </div>
    </div>
  )
}

export default Profile
