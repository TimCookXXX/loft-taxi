import React from 'react'
import './profile.scss'
import svgCardOne from '../../assets/images/svgCardOne.svg'
import svgCardTwo from '../../assets/images/svgCardTwo.svg'
import Button from '../../ui/Button'
import { connect } from 'react-redux'
import { saveCard } from '../../actions'
import { getCard } from '../../actions'
import Input from '@mui/material/Input'
import { useState } from 'react'
import { useEffect } from 'react'

function Profile({saveCard, getCard}) {
  // const [cardNumber, setCardNumber] = useState({cardNumber})
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cardName, setCardName] = useState('')
  const [cvc, setCvc] = useState('')

  useEffect(() => {
    getCard()
  },[getCard])

  const handleSubmit = (e) => {
    e.preventDefault()
      const cardNumber = e.target.cardNumber ? e.target.cardNumber.value : null
      const cardName = e.target.cardName ? e.target.cardName.value : null
      const expiryDate = e.target.expiryDate ? e.target.expiryDate.value : null
      const cvc = e.target.cvc ? e.target.cvc.value : null

      saveCard(cardNumber, cardName, expiryDate, cvc)
      console.log(saveCard(cardNumber, cardName, expiryDate, cvc))
  }
  return (
    <div className='profile'>
      <form className='profile__form' onSubmit={handleSubmit}>
        <h2 className='profile__title'>Профиль</h2>
        <p className='profile__text'>Введите платёжные данные</p>
        <div className='profile__card'>
          <div className='profile__right'>
            <div className='profile__item'>
              <label className='profile__label' htmlFor="cardName">Имя владельца</label>
              <Input id='cardName' type="text" name='cardName' placeholder='Name Lastname' onChange={(e) => setCardName(e.target.value)} />
            </div>
            <div className='profile__item'>
              <label className='profile__label' htmlFor="cardNumber">Номер карты</label>
              <Input id='cardNumber' name='cardNumber' type="text" placeholder='5545  2300  3432  4521' onChange={(e) => setCardNumber(e.target.value)} />
            </div>
            <div className='profile__card--info'>
              <div className='profile__item'>
                <label htmlFor="date" className='profile__label'>MM/YY</label>
                <Input type="text" id='expiryDate' name='expiryDate' placeholder='05/08' onChange={(e) => setExpiryDate(e.target.value)}  />
              </div>
              <div className='profile__item'>
                <label htmlFor="cvc" className='profile__label'>CVC</label>
                <Input type="text" id='cvc' name='cvc' placeholder='***' onChange={(e) => setCvc(e.target.value)} />
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card__header'>
              <img src={svgCardOne} alt="svgCardOne" />
              <p className='card__date'>{expiryDate}</p>
            </div>
            <div className='card__preview'>{cardNumber}</div>
            <div className='card__bottom'>
              <img src={svgCardTwo} alt="svgCardTwo" />
            </div>
          </div>
        </div>
        <Button type='submit'>Сохранить</Button>
      </form>
    </div>
  )
}

export default connect(state => ({
  cardNumber: state.CardData.cardNumber,
  expiryDate: state.CardData.expiryDate,
  cardName: state.CardData.cardName,
  cvc: state.CardData.cvc
}), {saveCard, getCard})(Profile)