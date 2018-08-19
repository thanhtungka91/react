import Api from './API'

export default {
  getListProducts () {
    return Api().get('products'); 
  }
}
