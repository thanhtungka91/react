const initState = {
  cartData: []
}

function cartReducer(state = initState, action) {
debugger
  switch (action.type) {
    case 'saveToCart': {
      return {
        ...state,
        cartData: [...state.arr, action.cartData]
      }
    }
    default:
      return state;
  }
}

export default cartReducer;
