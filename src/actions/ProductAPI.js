import Api from '@/actions/Api'

export default {
  getListItems () {
    return Api().get('/listItem')
  }
}
