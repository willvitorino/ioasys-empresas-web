import axios from 'axios';

const api = {
  location: "https://empresas.ioasys.com.br/api/v1/"
}

export const login = (model) => {

  return new Promise((resolve, reject) => {
    axios.post(`${api.location}/users/auth/sign_in`, model)
      .then(res => {
        // localStorage.setItem('access_token', res.headers.authorization)

        // let prefeituraId = JSON.parse(decode(res.headers.authorization.split(' ')[1]).sub).prefeituraId

        // localStorage.setItem('prefeitura', prefeituraId)
        resolve({ headers: res.headers, body: res.data })
      })
      .catch(err => {
        reject(err.response.data)
      })
  })
}