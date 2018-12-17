import React, { Component } from 'react';
import './App.css';
import { Layout, Button, Icon, Menu } from 'antd';
import './components/SideBar/style/index.scss'
import {LeftSideBar} from './components/SideBar'
import {NavBar} from './components/NavBar'

const { Content, Header, Sider } = Layout;
const {SubMenu, Item } = Menu;

class App extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{padding: 0}} >
            <NavBar collapsed={this.state.collapsed}></NavBar>
          </Header>
          <Layout>
            <LeftSideBar collapsed={this.state.collapsed}/>
            <Content>
              <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
             </Content>
          </Layout>
        </Layout>

          
      </div>
    );
  }
}

export default App;
