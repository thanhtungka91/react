import axios from 'axios'

export default () => {
  let url = 'https://private-3efa8-products123.apiary-mock.com/'

  const instance = axios.create({
    baseURL: url,
  })

  return instance
}
