import { takeEvery, call, put } from 'redux-saga/effects'
import { serverLogIn } from '../api'
import { AUTHENTICATE, logIn } from '../actions' 

export function* authenticateSaga(action) {
  const { email, password } = action.payload
  const { success, token } = yield call(serverLogIn, email, password)

  if(success) {
    yield put(logIn())
  }

  token && window.localStorage.setItem('loft', token)
  window.localStorage.getItem('loft')
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}

// import { logIn, AUTHENTICATE } from '../actions'
// import {serverLogIn} from '../api'

// export const AuthTokenServer = (store) => (next) => async (action) => {
// 	if(action.type === AUTHENTICATE){
// 		const {email, password} = action.payload;
// 		const {success, token} = await serverLogIn(email, password);

// 		success && store.dispatch(logIn());
// 		token && window.localStorage.setItem("loftTaxiUserData", token);
	
// 	} 
// 	else next(action);
// }