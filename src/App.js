import React, { Component } from 'react';
import './App.css';
import { Layout, Button, Icon } from 'antd';
import './components/SideBar/style/index.scss'
import {LeftSideBar} from './components/SideBar'
import {NavBar} from './components/NavBar'

const { Content, Header } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = (e) => {
    this.setState({
      collapsed: !e,
    });
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{padding: 0, height: 50, lineHeight: '50px'}} >
            <NavBar collapsed={this.state.collapsed} toggleCollapsed={this.toggleCollapsed}></NavBar>
          </Header>
          <Layout>
            <LeftSideBar collapsed={this.state.collapsed}/>
            <Content>
              {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button> */}
                {/* <div>内容</div> */}
                {this.props.children}
             </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
