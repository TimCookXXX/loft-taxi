import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { authSaga } from './sagas/authSaga'
import { regSaga } from './sagas/regSaga'
import { saveCardSaga, getCardSaga } from './sagas/cardSaga'
import { getAddresses } from './sagas/addressesSaga'
import { getRouteSaga } from './sagas/routeSaga'
// import { AuthTokenServer } from './sagas/authSaga'

const sagaMiddleware = createSagaMiddleware()

// function saveToLocalStorage(state) {
//   try {
//       const serialisedState = JSON.stringify(state)
//       console.log(serialisedState)
//       localStorage.setItem('loftTaxiUserData', serialisedState)
//   } catch (e) {}
// }

// function loadFromLocalStorage() {
//   try {
//       const serialisedState = localStorage.getItem('loftTaxiUserData')
//       if (serialisedState === null) return undefined
//       return JSON.parse(serialisedState)
//   } catch (e) {
//       return undefined
//   }
// }

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(authSaga)
sagaMiddleware.run(regSaga)
sagaMiddleware.run(saveCardSaga)
sagaMiddleware.run(getCardSaga)
sagaMiddleware.run(getAddresses)
sagaMiddleware.run(getRouteSaga)

// store.subscribe(() => saveToLocalStorage(store.getState()))
