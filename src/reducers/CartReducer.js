const initState = {
  cartData: []
}

function cartReducer(state = initState, action) {

  switch (action.type) {
    case 'saveToCart': {
      return {
        ...state,
        cartData: state.cartData.concat(action.cartData)
      }
    }
    default:
      return state;
  }
}

export default cartReducer;
