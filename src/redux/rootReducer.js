import { combineReducers } from 'redux';
import productReducer from '../reducers/ProductReducer';
import cartReducer from '../reducers/CartReducer';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
});
export default rootReducer;