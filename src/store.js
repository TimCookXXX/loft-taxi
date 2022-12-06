import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { authMiddleware } from './authMiddleware'
import { getCardMiddleware } from './getCardMiddleware'
import { saveCardMiddleware } from './saveCardMiddleware'

function saveToLocalStorage(state) {
  try {
      const serialisedState = JSON.stringify(state)
      console.log(serialisedState)
      localStorage.setItem('loftTaxiUserData', serialisedState)
  } catch (e) {}
}

function loadFromLocalStorage() {
  try {
      const serialisedState = localStorage.getItem('loftTaxiUserData')
      if (serialisedState === null) return undefined
      return JSON.parse(serialisedState)
  } catch (e) {
      return undefined
  }
}

export const store = createStore(rootReducer, loadFromLocalStorage(), applyMiddleware(authMiddleware, getCardMiddleware, saveCardMiddleware))

store.subscribe(() => saveToLocalStorage(store.getState()))