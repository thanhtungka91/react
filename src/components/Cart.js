import React, {Component} from 'react';

class Cart extends Component{
  constructor(props){
    super(props);
    this.state = {
        showCart: false,
        cart: this.props.cartItems,
        mobileSearch: false
    };
  }

  render(){
    return(
      <div className="CartLayout">
        <p> 
          Here is cart, please doing some thing here 
        </p>
      </div>
  )
  }
}

export default Cart;