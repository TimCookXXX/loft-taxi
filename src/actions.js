export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REGISTRATION = 'REGISTRATION'
export const SAVE_CARD = 'SAVE_CARD'
export const GET_CARD = 'GET_CARD'
export const SHOW_CARD_DATA = 'SHOW_CARD_DATA'
export const GET_ADDRESSES = 'GET_ADDRESSES'
export const GET_ADDRESSES_STATE = 'GET_ADDRESSES_STATE'
export const GET_ROUTE = 'GET_ROUTE'
export const SAVE_ROUTE = 'SAVE_ROUTE'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const logIn = () => ({ type: 'LOG_IN' })
export const logOut = () => ({ type: 'LOG_OUT' })
export const authenticate = (email, password) => ({ type: 'AUTHENTICATE', payload: { email, password }})
export const registration = (email, password, name, surname) => ({ type: 'REGISTRATION', payload: { email, password, name, surname }})
export const showCardData = (data) => ({
  type: SHOW_CARD_DATA,
  payload: {
      cardNumber: data.cardNumber,
      cardName: data.cardName,
      cvc: data.cvc,
      expiryDate: data.expiryDate
  }
})

export const saveCard = (cardNumber, cardName, expiryDate, cvc) => ({
  type: SAVE_CARD,
  payload: {
      cardNumber,
      cardName,
      expiryDate,
      cvc,
      token: 'recgmdFtjNoJlaNjC'
  }
})

export const getCard = () => ({
  type: GET_CARD,
  payload: {
      token: 'recgmdFtjNoJlaNjC'
  }
})

export const getAddresses = () => ({
  type: GET_ADDRESSES
})

export const getAddressesState = (addresses) => ({
  type: GET_ADDRESSES_STATE,
  payload: addresses
})

export const getRoute = (address1, address2) => ({
  type: GET_ROUTE,
  payload: { address1, address2 }
})

export const saveRoute = (addresses) => ({
  type: SAVE_ROUTE,
  payload: addresses
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})