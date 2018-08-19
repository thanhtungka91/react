import React, {Component} from 'react';
import { Row, Col, Input } from 'antd';
import { Radio, Pagination } from 'antd';
import 'antd/dist/antd.css'; 

const Search = Input.Search;

class Itemlists extends Component{
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
      <div className="listProducts" style={{ paddingTop: 30, paddingLeft:200, paddingRight:150 }}>
        <Row className="searchBar"> 
          <Col span={16}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
          </Col>
          <Col span={8}>
            <Radio.Group size="large">
              <Radio.Button value="large">Grid</Radio.Button>
              <Radio.Button value="default">List</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>

        <Row className="listProducts">
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row>
          <Pagination defaultCurrent={2} total={30} />
        </Row>
      </div>
      
    )
  }
}

export default Itemlists;