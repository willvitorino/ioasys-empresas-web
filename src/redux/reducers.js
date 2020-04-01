import { LOGIN } from './actions'

import { login } from '../utils/api'

const initialState = {
  hasError: false,
  form: {
    email: '',
    password: ''
  }
}

export function reducer ( state=initialState, action ) {
  switch(action.type) {
    case LOGIN:
      login(action.form).then(
        res => {
          return {
            hasError: false,
            form: action.form
          } 
        }
      ).catch(
        err => {
          return {
            hasError: true,
            form: action.form
          } 
        }
      )
    break
    default:
      return state
  }
} 