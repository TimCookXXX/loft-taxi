import { LOG_IN, LOG_OUT } from '../actions'

const initialState = {
  authToken: '',
  isLoggedIn: false
}

export default function AuthReducer(state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
      }
    }
    default:
      return state
  }
}