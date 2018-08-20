import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import  Cart from './Cart';
import  ItemLists from './ItemLists';
import { connect } from 'react-redux';

import 'antd/dist/antd.css'; 
import { Row, Col, Badge } from 'antd';

class Top extends Component{
  constructor(props){
    super(props);
    this.state = {
        showCart: false,
        cart: this.props.cartItems,
        mobileSearch: false
    };
  }

  handleSubmit(e){
    e.preventDefault();
  }

  handleMobileSearch(e){
    e.preventDefault();
    this.setState({
        mobileSearch: true
    })
  }

  handleSearchNav(e){
    e.preventDefault();
    this.setState({
        mobileSearch: false
    }, function(){
        this.refs.searchBox.value = "";
        this.props.handleMobileSearch();
    })
  }

  handleCart(e){
    e.preventDefault();
    this.setState({
        showCart: !this.state.showCart
    })
  }

  render(){
    const numberItems  = (this.props.carts.cart.cartData).length 

    return(
      <div className="HeaderLayout">
        <Row>
          <Col span={8}>
            <Link to='/' component={ItemLists} >Home </Link>
          </Col>
          <Col span={7}>Top 5 Products </Col>
          <Col span={7}>
            <Link style={{paddingRight:20}} to='/cart' component={Cart} >
                Your Cart
            </Link>
            <Badge count={numberItems}>
            </Badge>
          </Col>
        </Row>
      </div>
  )
  }
}

const mapStateToProps = state => ({
  carts: state
});  

export default connect(mapStateToProps)(Top); 