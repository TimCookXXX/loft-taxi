import React from 'react'
import './profile.scss'
import svgCardOne from '../../assets/images/svgCardOne.svg'
import svgCardTwo from '../../assets/images/svgCardTwo.svg'
import svgCardThree from '../../assets/images/svgCardThree.svg'
import Button from '../../ui/Button'
import { connect } from 'react-redux'
import { saveCard } from '../../actions'
import { getCard } from '../../actions'
import Input from '@mui/material/Input'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Profile({saveCard, getCard}) {
  const saveCardData = localStorage.getItem('card')
  const data = JSON.parse(saveCardData)

  // const placeHolder = (preview, value, simbol) => {
  //   Array.from(value).forEach(el => preview = preview.replace(simbol, el) )
  
  //   return preview.replace(/(\d?)\D+$/, '$1')
  // }
  

  // const regName = (value) => value.replace(/\d/g, '')
  // const regCVC = (value) => value.replace(/\D/g, '').substr(0, 3)
  // const regDate = (value) => placeHolder('**/**', value.replace(/\D/g, ''), '*')
  // const regCard = (value) => placeHolder('**** **** **** ****', value.replace(/\D/g, ''), '*')

  const [cardNumber, setCardNumber] = useState(data?.cardNumber)
  const [expiryDate, setExpiryDate] = useState(data?.expiryDate)
  const [cardName, setCardName] = useState(data?.cardName)
  const [cvc, setCvc] = useState(data?.cvc)

  let history = useHistory()

  useEffect(() => {
    getCard()
  },[getCard])

  const handleSubmit = (e) => {
    e.preventDefault()
    const cardData = {
      cardNumber: e.target.cardNumber ? e.target.cardNumber.value : null,
      cardName: e.target.cardName ? e.target.cardName.value : null,
      expiryDate: e.target.expiryDate ? e.target.expiryDate.value : null,
      cvc: e.target.cvc ? e.target.cvc.value : null,
    }
      localStorage.setItem('card', JSON.stringify(cardData))

      saveCard(cardNumber, cardName, expiryDate, cvc)
      console.log(saveCard(cardNumber, cardName, expiryDate, cvc))
  }

  const formik = useFormik({
    initialValues: {
      cardName: data?.cardName,
      cardNumber: data?.cardNumber,
      expiryDate: data?.expiryDate,
      cvc: data?.cvc
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
      .required('Введите Ваше имя и фамилию'),
      cardNumber: Yup.string()
      .min(16, 'Проверьте номер карты')
      .required('Поле обязательно для заполнения'),
      expiryDate: Yup.string()
      .min(4, 'Проверьте дату')
      .required('Поле обязательно для заполнения'),
      cvc: Yup.string()
      .min(3, 'Проверьте Ваш CVC код')
      .required('Поле обязательно для заполнения')
    }),
    onSubmit: values => handleSubmit(values)
  })

  return (
    <div className='profile__overlay' onClick={() => history.push('/')}>
    <div className='profile' onClick={(e) => e.stopPropagation()}>
      <form className='profile__form' onSubmit={handleSubmit}>
        <h2 className='profile__title'>Профиль</h2>
        <p className='profile__text'>Введите платёжные данные</p>
        <div className='profile__card'>
          <div className='profile__right'>
            <div className='profile__item'>
              <label className='profile__label' htmlFor="cardName">Имя владельца</label>
              <Input id='cardName' name='cardName' type='text' placeholder='Name Lastname' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardName} />
              {formik.touched.cardName && formik.errors.cardName ? (<div>{formik.errors.cardName}</div>) : null}
            </div>
            <div className='profile__item'>
              <label className='profile__label' htmlFor="cardNumber">Номер карты</label>
              <Input id='cardNumber' name='cardNumber' type="text" placeholder='5545  2300  3432  4521' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardNumber}  />
              {formik.touched.cardNumber && formik.errors.cardNumber ? (<div>{formik.errors.cardNumber}</div>) : null}
            </div>
            <div className='profile__card--info'>
              <div className='profile__item'>
                <label htmlFor="expiryDate" className='profile__label'>MM/YY</label>
                <Input id='expiryDate' name='expiryDate' type='text' placeholder='05/12' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.expiryDate} />
                {formik.touched.expiryDate && formik.errors.expiryDate ? (<div>{formik.errors.expiryDate}</div>) : null}
              </div>
              <div className='profile__item'>
                <label htmlFor="cvc" className='profile__label'>CVC</label>
                <Input id='cvc' name='cvc' type="text" placeholder='***' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cvc} />
                {formik.touched.cvc && formik.errors.cvc ? (<div>{formik.errors.cvc}</div>) : null}
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
              <div className='card__bottom--duplicate'>
                <img className='card-svg' src={svgCardThree} alt="svgCardThree" />
                <img className='card-svg--two' src={svgCardThree} alt="svgCardThree" />
              </div>
            </div>
          </div>
        </div>
        <Button type='submit'>Сохранить</Button>
      </form>
    </div>
    </div>
  )
}

export default connect(state => ({
  cardNumber: state.CardData.cardNumber,
  expiryDate: state.CardData.expiryDate,
  cardName: state.CardData.cardName,
  cvc: state.CardData.cvc
}), {saveCard, getCard})(Profile)