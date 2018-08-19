import React, {Component} from 'react';
import { Row, Col, Input } from 'antd';
import { Radio, Pagination } from 'antd';
import { Card } from 'antd';

import ProducttAPI from '../actions/ProductAPI'

import 'antd/dist/antd.css'; 

const { Meta } = Card;

const Search = Input.Search;

class ItemLists extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }

  handleSubmit(e){
    e.preventDefault();
  }


  async getProducts(){
    try {
      const response = await ProducttAPI.getListProducts(); 
      this.setState({
        products : response.data.products
      }); 
    } catch(error) {
      alert("please check api issue"); 
    }
  }
  
  componentWillMount(){
		this.getProducts();
  }

  handleCart(e){
    e.preventDefault();
    this.setState({
        showCart: !this.state.showCart
    });
  }

  render(){
    let listProducts = []; 

    if (this.state.products.length != 0) {
      listProducts = (this.state.products).map((product) =>{
        let name = product.name; 
        let productUrl = product.image; 
        let description = product.description; 
        return (
          <Col span={8} style={{ paddingBottom: 20}} >
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt={name} src={productUrl} />}
            >
              <Meta
                title={name}
                description={description}
              />
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

export default ItemLists;