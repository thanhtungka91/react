import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input } from 'antd';
import { Radio, Pagination } from 'antd';
import { Card,Button } from 'antd';
import {saveProduct} from '../actions/ProductAPI';
import {saveToCart} from '../actions/Cart';
import ProducttAPI from '../actions/ProductAPI'; 

import 'antd/dist/antd.css'; 

const { Meta } = Card;

const Search = Input.Search;

class ItemLists extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: [], 
      carts: []
    };
  }

  handleSubmit(e){
    e.preventDefault();
  }


  async getProducts(){
    try {
      const response = await ProducttAPI.getListProducts(); 
      console.log("This is the response ", response);

      const {saveProductConnect} = this.props;
      saveProductConnect(response.data.products);
      
    } catch(error) {
      alert("please check api issue"); 
    }
  }

  componentWillMount(){
    this.getProducts();
  }

  addToCart = (product) => {
    const {addToCartConnect} = this.props;
    debugger
    addToCartConnect(product); 
  }
  handleCart(e){
    e.preventDefault();
    this.setState({
        showCart: !this.state.showCart
    });
  }

  render(){
    let listProducts = []; 
    debugger
    this.state.products = this.props.products;

    if (this.state.products.length != 0) {
      listProducts = (this.state.products).map((product, index) =>{
        let name = product.name; 
        let productUrl = product.image; 
        let description = product.description; 
        return (
          <Col key = {index} span={8} style={{ paddingBottom: 20}} >
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt={name} src={productUrl} />}
            >
              <Meta
                title={name}
                description={description}
              />
              <Button type="primary" icon="plus-circle-o" size="small"
                onClick={this.addToCart.bind(this, product)}
              >
              </Button>
            </Card>
        </Col>
        )
      }); 
    }

    return(
      <div className="listProducts" style={{ paddingTop: 30, paddingLeft:200, paddingRight:150, paddingBottom:30 }}>
        <Row className="searchBar" style={{ paddingBottom: 30 }} > 
          <Col span={16}>
          <Search 
            placeholder="Search Product"
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

        <Row gutter={16}>
          {listProducts}
        </Row>
        
        <Row>
          <Pagination defaultCurrent={2} total={30} />
        </Row>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  products: state.product.productData,
  carts: state.product.cartData
});

const mapDispatchToProps = dispatch => ({
  saveProductConnect: (response) => {
    dispatch(saveProduct(response));
  }, 
  addToCartConnect: (product) => {
    dispatch(saveToCart(product));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemLists);