import { LOGIN } from './actions'

const initialState = {
  login: {}
}

export function reducer ( state=initialState, action ) {
  switch(action.type) {
    case LOGIN:
      return state
    default:
      return state
  }
} 