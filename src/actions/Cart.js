export function saveToCart(product) {
  return (dispatch) => {
    dispatch({
      type: 'saveToCart',
      cartData: product
    })
  }
}