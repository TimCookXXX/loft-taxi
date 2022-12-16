import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_ROUTE, saveRoute } from '../actions'
import { serverGetRoute } from '../api'

export function* getRouteSagaMiddleware(action) {
  const { address1, address2 } = action.payload
  const data = yield call(serverGetRoute, address1, address2)
  if(data.length > 0) {
    yield put(saveRoute(data))
  }
}

export function* getRouteSaga() {
  yield takeEvery(GET_ROUTE, getRouteSagaMiddleware)
}