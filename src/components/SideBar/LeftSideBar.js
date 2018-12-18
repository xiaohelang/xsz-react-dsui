import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './style/index.scss';

const { Sider } = Layout;
const { SubMenu, Item }= Menu;

const icon = {
  '/home': 'appstore',
  '/bills': 'desktop',
  '/trade': 'profile',
  '/codocument': 'file-text'
}


class LeftSideBar extends Component {
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children){
        return <SubMenu key={item.key}  title={<span><Icon type={icon[item.key]} /><span>{item.title}</span></span>}>
          {this.renderMenu(item.children)}
        </SubMenu>
      }
      return  <Item key={item.key}><NavLink replace to={item.key}><Icon type={item.sub? icon[item.key]: ''} /><span>{item.title}</span></NavLink></Item>
    })
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
        menuTreeNode
    })
}
  render() {
    console.log('inlineCollapsed')
    console.log(this.props.collapsed)

    // const ll = this.renderMenu()

    const {collapsed} = this.props
    
    return (
          <Sider width={220} theme='light' className="sidebar-left" collapsed={collapsed}>
            <Menu mode="inline" inlineCollapsed={collapsed} inlineIndent={24}>
              {/* <Item key="1">
                <NavLink to="/desk">
                  <Icon type="appstore" />
                  <span>工作台</span>
                </NavLink>
              </Item>
              <SubMenu key="sub1" title={<span><Icon type="desktop" /><span>单据管理</span></span>}>
                <Menu.Item key="5">核注清单</Menu.Item>
                <Menu.Item key="6">报关单</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="profile" /><span>加工贸易</span></span>}>
                <Menu.Item key="9">加贸手册备案</Menu.Item>
                <Menu.Item key="10">加贸手册报核</Menu.Item>
              </SubMenu>
              <Item key="101">
                <Icon type="file-text" />
                <span>报表中心</span>
              </Item>
              <SubMenu key="sub3" title={<span><Icon type="inbox" /><span>基础资料</span></span>}>
                <Menu.Item key="5">收货人</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
                <Menu.Item key="5">我的信息</Menu.Item>
                <Menu.Item key="6">公司信息</Menu.Item>
                <Menu.Item key="7">用户信息</Menu.Item>
                <Menu.Item key="8">权限管理</Menu.Item>
                <Menu.Item key="9">预设值</Menu.Item>
                <Menu.Item key="10">基础编码</Menu.Item>
                <Menu.Item key="11">系统选项</Menu.Item>
                <Menu.Item key="12">订单管理</Menu.Item>
                <Menu.Item key="13">操作日记</Menu.Item>
              </SubMenu>
            */}
            {this.state.menuTreeNode}
            </Menu>
          </Sider>
    );
  }
}

export default LeftSideBar;
