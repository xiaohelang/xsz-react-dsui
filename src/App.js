import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import './components/SideBar/style/index.scss'
import {LeftSideBar} from './components/SideBar'

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <LeftSideBar/>
          <Content>
            Content
          </Content>
        </Layout>
          
      </div>
    );
  }
}

export default App;
