import { combineReducers } from 'redux';
import productReducer from '../reducers/ProductReducer';

const rootReducer = combineReducers({
  product: productReducer,
});
export default rootReducer;