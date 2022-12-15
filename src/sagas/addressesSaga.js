import { takeEvery, call, put } from 'redux-saga/effects'
import { getAddressesState, GET_ADDRESSES } from '../actions'
import { serverAddressList } from '../api'

export function* getAddressesSaga(action) {
  const data = yield call(serverAddressList)
  if(data.addresses) {
    yield put(getAddressesState(data.addresses))
  }
}

export function* getAddresses() {
  yield takeEvery(GET_ADDRESSES, getAddressesSaga)
}