import axios from 'axios'

export default () => {
  let url = 'https://app.smartmat.jp:3000/'

  const instance = axios.create({
    baseURL: url,
  })

  return instance
}
