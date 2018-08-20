import React, {Component} from 'react';
import { Table , Button} from 'antd';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../actions/Cart';


class Cart extends Component{

  removeProductFromCart = (product) => {
    const {removeProductFromCartConnect} = this.props;
    removeProductFromCartConnect(product); 
  }
  getTotalPrice () {
    const listCarts  = this.props.carts.cart.cartData 
    let total = 0 ; 
    listCarts.forEach(product => {
      total += product.unitPrice * product.Quantity
    });
    return total; 
  }

  render(){
    const data  = this.props.carts.cart.cartData 
    
    const columns = [{
      title: '',
      dataIndex: 'image',
      key: 'image',
      render: text => <img style={{width:150}} src={text} />,
    }, {
      title: 'ProductName',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <span>
          <p> {record.name}</p>
          <p> Item lef in stock: {record.unitsInStock}</p>
        </span>
      ),
    }, {
      title: 'Price',
      dataIndex: 'unitPrice',
      render: (text, record) => (
        <span>
          <p> Price: {record.unitPrice}$</p>
        </span>
      ),
    }, {
      title: 'Q-ty',
      key: 'action',
      render: (text, record) => (
        <span>
          <p> {record.Quantity} </p>
          <Button type="primary" icon="minus-circle-o" size="small"
            onClick={this.removeProductFromCart.bind(this, record)}
          >
          </Button>
        </span>
      ),
    }];

    if (data.length !== 0) {
      return(
        <div className="CartLayout" style={{ paddingTop: 30, paddingLeft:200, paddingRight:150, paddingBottom:30 }}>
          <h2>Your Cart</h2>
          <Table columns={columns} dataSource={data} />
          <div>
            <h2>TotalPrice: {this.getTotalPrice()} $ </h2>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Cart is Empty 
        </div>
      )
    }
    
  }
}

const mapStateToProps = state => ({
  carts: state
});

const mapDispatchToProps = dispatch => ({
  removeProductFromCartConnect: (product) => {
    dispatch(removeProductFromCart(product));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);