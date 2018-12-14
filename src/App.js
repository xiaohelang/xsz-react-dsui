import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import './components/SideBar/style/index.scss'
import {LeftSideBar} from './components/SideBar'
import {NavBar} from './components/NavBar'

const { Content, Header } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{padding: 0}}>
            <NavBar></NavBar>
          </Header>
          <Layout>
            <LeftSideBar/>
            <Content>
              <ul>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
              </ul> 
            </Content>
          </Layout>
        </Layout>

          
      </div>
    );
  }
}

export default App;
