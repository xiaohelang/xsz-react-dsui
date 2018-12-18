import React, { Component } from 'react';
import { Layout, Button, Icon, Avatar, Badge, Menu  } from 'antd';

const { Sider, Content } = Layout;
const { Item }= Menu;
//props ==> toggleCollapsed  collapsed
class NavBar extends Component {
    constructor() {
      super()
      this.state= {
        collapsed: false
      }
    }
    // 全屏
    toggleFullScreen = () => {
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    }
    // 收缩
    toggleCollapsed = () => {
      this.setState({
        collapsed:!this.state.collapsed
      })
      this.props.toggleCollapsed(this.state.collapsed)
    }
  render() {
    const {collapsed} = this.props
    return (
      <Layout style={{height: '100%'}}>
        <Sider theme='light' width={220} collapsed={collapsed} >
          <Menu mode="inline" inlineCollapsed={collapsed} inlineIndent={24}>
            <Item key="1" style={{background: '#1F2432'}}>
              {/* <Icon type="appstore" /> */}
              <img src="/assets/logo-closed.png" alt=""/>
              <span style={{marginLeft: 10, color: '#fff'}} >聚合通关</span>
            </Item>
          </Menu>
        </Sider>
        <Content height={64} style={{background: '#fff', display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginRight: 20, marginLeft: 20 }}>
              <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <Icon  onClick={this.toggleFullScreen} type="fullscreen" />
          </div>
          <div>
            <span style={{ marginRight: 20 }}>广州腾飞国际贸易公司</span>
            <Badge count={1} size="small"  style={{ marginRight: 20 }}>
              <a href="#">
                <Icon type="bell" size="large"  theme="filled" style={{ marginRight: 26 }}/>
              </a>
            </Badge>
            <Avatar icon="user" style={{ marginRight: 20 }}/>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default NavBar;
