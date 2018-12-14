import React, { Component } from 'react';
import { Layout } from 'antd';

const { Sider, Content } = Layout;

class NavBar extends Component {
  render() {
    return (
      <Layout>
        <Sider theme='light' width={220}>聚合通关</Sider>
        <Content height={64}>9999</Content>
      </Layout>
    );
  }
}

export default NavBar;
