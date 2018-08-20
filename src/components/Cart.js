import React, {Component} from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';


class Cart extends Component{
  constructor(props){
    super(props);
  }

  render(){
    debugger
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
          <p>10</p>
          <a href="javascript:;">Delete</a>
        </span>
      ),
    }];

    if (data.length !== 0) {
      return(
        <div className="CartLayout" style={{ paddingTop: 30, paddingLeft:200, paddingRight:150, paddingBottom:30 }}>
          <h2>Your Cart</h2>
          <Table columns={columns} dataSource={data} />
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

export default connect(mapStateToProps)(Cart);