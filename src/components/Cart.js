import React, {Component} from 'react';
import { Table } from 'antd';


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
          <p>10</p>
          <a href="javascript:;">Delete</a>
        </span>
      ),
    }];
    
    const data = [
      {
        "productID": 4,
        "name": "Chef Anton's Cajun Seasoning",
        "description": "",
        "unitPrice": 22,
        "unitsInStock": 53,
        "image": "http://lorempixel.com/400/200/technics/"
      },
      {
        "productID": 5,
        "name": "Chef Anton's Gumbo Mix",
        "description": "",
        "unitPrice": 21.35,
        "unitsInStock": 0,
        "image": "http://lorempixel.com/400/200/technics/"
      }
    ];

    return(
      <div className="CartLayout" style={{ paddingTop: 30, paddingLeft:200, paddingRight:150, paddingBottom:30 }}>
        <h2>Your Cart</h2>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default Cart;