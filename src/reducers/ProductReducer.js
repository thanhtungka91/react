const initState = {
  productData: []
}

function productReducer(state = initState, action) {
  debugger
  switch (action.type) {
    case 'SAVE_PRODUCT_RESPONSE': {
      return {
        ...state,
        productData: action.data
      }
    }
    default:
      return state;
  }
}

export default productReducer;
