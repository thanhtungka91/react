import React, { Component } from 'react';
import { Layout } from 'antd';
import Top from './components/Top';
import './App.css';
import Routers from './routers/Routers';

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(){
		super();
		this.state = {
			products: [],
			cart: [],
			totalItems: 0,
			totalAmount: 0, 
			term: '',
			category: '',
			cartBounce: false,
			quantity : 1,
			quickViewProduct: {},
			modalActive: false
    }
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ color: 'yellow' }}>
            <Top
              cartItems={this.state.cart}
            />
          </Header>
          <Content>
            <Routers />
          </Content>
          <Footer>
            <p>
              copyright @2018 TungVT
            </p>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
