const initState = {
  cartData: []
}

const removeProduct = (cartDatas, product) => {
  return cartDatas.filter(cartData => cartData.productID !== product.productID);
}

function cartReducer(state = initState, action) {

  switch (action.type) {
    case 'saveToCart': {
      return {
        ...state,
        cartData: [...state.cartData, action.cartData]
      }
    }
    case 'removeFromCart': {
      return {
        ...state,
        cartData: removeProduct(state.cartData, action.cartData),
      }
    }

    default:
      return state;
  }
}

export default cartReducer;
