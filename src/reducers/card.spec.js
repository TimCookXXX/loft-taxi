import CardData from './card'
import { SAVE_CARD } from '../actions'


describe('card', () => {
  let action
  const initialState = {
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  }

  test('Should retern default state if no action type', () => {
    expect(CardData({}, {type: null})).toEqual({})
  });

  test('Should successfully saved card data', () => {
    action = {
      type: SAVE_CARD,
      payload: {
        cardName: 'Name', 
        cardNumber: '1234 1234 1234 1234', 
        expiryDate: '01/28', 
        cvc: '123'
      }
    }
    
    expect(CardData(initialState, action.payload)).toEqual({
      ...initialState,
      cardData: {
        cardName: 'Name', 
        cardNumber: '1234 1234 1234 1234', 
        expiryDate: '01/23', 
        cvc: '123'
      }
      }
    )
  })
})