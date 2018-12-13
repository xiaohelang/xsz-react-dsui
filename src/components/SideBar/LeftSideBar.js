import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './style/index.scss';

const { Sider } = Layout;
const { SubMenu, Item }= Menu;

class LeftSideBar extends Component {
  render() {
    return (
          <Sider className="sidebar-left">
            <Menu mode="inline" >
              <Item key="1">
                <Icon type="pie-chart" />
                <span>工作台</span>
              </Item>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>单据管理</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="mail" /><span>加工贸易</span></span>}>
                <Menu.Item key="9">Option 5</Menu.Item>
                <Menu.Item key="10">Option 6</Menu.Item>
                <Menu.Item key="11">Option 7</Menu.Item>
                <Menu.Item key="12">Option 8</Menu.Item>
                <Menu.Item key="13">Option 8</Menu.Item>
                <Menu.Item key="14">Option 8</Menu.Item>
                <Menu.Item key="15">Option 8</Menu.Item>
                <Menu.Item key="16">Option 8</Menu.Item>
                <Menu.Item key="17">Option 8</Menu.Item>
                <Menu.Item key="18">Option 8</Menu.Item>
                <Menu.Item key="19">Option 8</Menu.Item>
                <Menu.Item key="20">Option 8</Menu.Item>
                <Menu.Item key="21">Option 8</Menu.Item>
                <Menu.Item key="22">Option 8</Menu.Item>
                <Menu.Item key="23">Option 8</Menu.Item>
                <Menu.Item key="24">Option 8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
    );
  }
}

export default LeftSideBar;
