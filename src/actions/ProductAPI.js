import Api from './API'

export default {
  getListProducts () {
    return Api().get('products'); 
  }
}

export function saveProduct(response) {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_PRODUCT_RESPONSE',
      data: response
    })
  }
}