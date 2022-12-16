import React from 'react'
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material'
import Button from '../../ui/Button'
import { connect } from 'react-redux'
import { getAddresses, getRoute } from '../../actions'
import { useState } from 'react'
import { useEffect } from 'react'
import PriceCard from './PriceCard'
import './mapOrderForm.scss'

function MapOrderForm({ getAddresses, getRoute, stateAddresses }) {
  const [addresses, setAddresses] = useState([])
  const [end, setEnd] = useState('')
  const [start, setStart] = useState('')
  const [car, setCar] = useState('Стандарт')
  const [modal, setModal] = useState(1)

  const changeCar = (carTitle) => {
    setCar(carTitle)
  }

  useEffect(() => {
    if(!stateAddresses[0]) {
      getAddresses()
    }
  },[getAddresses, stateAddresses])

  useEffect(() => {
    if(stateAddresses) {
      setAddresses(stateAddresses)
    }
  },[stateAddresses])

  const handleSubmit = async (event) => {
    event.preventDefault()
    await getRoute(start, end)
  }

  const prices = [
    { title: 'Стандарт', price: 150, img: 0 },
    { title: 'Премиум', price: 250, img: 1 },
    { title: 'Бизнес', price: 300, img: 2 }
  ]

  return (  
    <div className='form__wrapper'>
      <form onSubmit={(event) => handleSubmit(event)} className='form__content'>
        <div className='select__form'>
          <FormControl className='form__control'>
            {start ? <div className='select__start' /> : null}
              <InputLabel>Откуда</InputLabel>
            <Select className='select' onChange={(e) => setStart(e.target.value)} value={start}>
              {addresses
                ? addresses
                    .filter((el) => el !== end)
                    .map((item) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))
              : null}
            </Select>
          </FormControl>
          <FormControl className='form__control'>
            {end ? <div className='select__end' /> : null}
              <InputLabel>Куда</InputLabel>
            <Select className='select' onChange={(e) => setEnd(e.target.value)} value={end}>
              {addresses
                ? addresses
                    .filter((el) => el !== start)
                    .map((item) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))
              : null}
            </Select>
          </FormControl>
        </div>
        <div className='submit__form'>
          <div className='price__form'>
            {prices
              ? prices.map((el, index) => (
                <PriceCard
                key={index}
                info={el}
                car={car}
                value={el.title}
                changeCar={changeCar}
                />
              ))
            : null}
          </div>
          <div className='submit__button'>
            <Button type='submit'>Заказать</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default connect(
  (state) => ({ stateAddresses: state.addressesReducer.addresses }),
  { getAddresses, getRoute }
) (MapOrderForm)
