export function saveToCart(product) {
  return (dispatch) => {
    dispatch({
      type: 'saveToCart',
      cartData: product
    })
  }
}

export function removeProductFromCart(product) {
  return (dispatch) => {
    dispatch({
      type: 'removeFromCart',
      cartData: product
    })
  }
}