import React, {Component} from 'react';

import 'antd/dist/antd.css'; 
import { Row, Col } from 'antd';

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
    return(
      <div className="HeaderLayout">
        <Row>
          <Col span={8}>Home</Col>
          <Col span={8}>Top 5 Products </Col>
          <Col span={8}>Your Cart</Col>
        </Row>
      </div>
  )
  }
}

export default Top;