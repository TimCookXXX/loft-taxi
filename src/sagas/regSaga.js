import { takeEvery, call, put } from 'redux-saga/effects'
import { serverRegistration } from '../api'
import { REGISTRATION, logIn } from '../actions'

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload
  const { success, token } = yield call(serverRegistration, email, password, name, surname)

  if(success) {
    yield put(logIn())

    window.localStorage.setItem('loft-email', email)
    window.localStorage.setItem('loft-pass', password)
  }

  token && window.localStorage.setItem('loft', token)
  window.localStorage.getItem('loft')
}

export function* regSaga() {
  yield takeEvery(REGISTRATION, registrationSaga)
}