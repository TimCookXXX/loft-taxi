import React from 'react'
import carOne from '../../assets/images/car1.png'
import carTwo from '../../assets/images/car2.png'
import carThree from '../../assets/images/car3.png'
import './priceCard.scss'

function PriceCard({ info, car, changeCar }) {
  const images = [carOne, carTwo, carThree]
  const active = 'car active'
  const nonActive = 'car'
  function changePlan() {
    if(info.title === car) {
      return active
    } else {
      return nonActive
    }
  }

  return (  
    <div className={changePlan()} onClick={() => changeCar(info.title)}>
      <div className='car__info'>
        <div className='car__title'>{info.title}</div>
        <div className='car__subtitle'>Стоимость</div>
        <div className='car__price'>{info.price} ₽</div>
      </div>
      <div className='car__img'>
        <img src={images[info.img]} alt="" className='img' />
      </div>
    </div>
  )
}

export default PriceCard
