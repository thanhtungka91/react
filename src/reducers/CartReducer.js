const initState = {
  cartData: []
}

const addProductToCart = (cartDatas, product) => {
  let checkDuplicate = false; 
  cartDatas.forEach(data => {
    if (data.productID === product.productID){
      if (product.unitsInStock > data.Quantity){
        product.Quantity += 1
      }
      checkDuplicate = true 
    } 
  });
  if (checkDuplicate === false) {
    product.Quantity = 1 
    return cartDatas.concat(product);
  } else {
    return cartDatas
  }
  
}

const removeProduct = (cartDatas, product) => {
  return cartDatas.filter(cartData => cartData.productID !== product.productID);
}

function cartReducer(state = initState, action) {

  switch (action.type) {
    case 'saveToCart': {
      return {
        ...state,
        cartData: addProductToCart(state.cartData, action.cartData)
      }
    }
    case 'removeFromCart': {
      return {
        ...state,
        cartData: removeProduct(state.cartData, action.cartData)
      }
    }

    default:
      return state;
  }
}

export default cartReducer;
