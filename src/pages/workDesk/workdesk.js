import React ,{Component}from 'react'
import { Card, Avatar, Row, Col, Skeleton, Switch} from 'antd';

const { Meta } = Card;
export default class Desk extends Component{

  constructor(props){
      super(props)
      this.state = { loading: true}
  }

  onChange = (checked) => {
    console.log('-------checked--------')
    console.log(checked)
    this.setState({
      loading: !checked
    })
  }
  
  render() {
    const gridStyle = {
      width: '33.33%',
      textAlign: 'center',
    };
    const name = '下午好!' + '  ' + '张三三'
    const desc = '最近登陆日期：'+'2018/12/19 13:23'
    const {loading} = this.state
    return (
      <div style={{position: 'relative', padding: 15 }}>
        <Switch checked={!loading} onChange={this.onChange} />
        <Card bordered={false} type="inner" style={{marginBottom: 15}} >
          {/* <Card.Grid bordered={false}  className={gridStyle}></Card.Grid>
          <Card.Grid bordered={false} className={gridStyle}></Card.Grid> */}
          {/* <Avatar size="large"></Avatar>
          <p>4444</p>
          <p>4444</p> */}
            <Row>
              <Col lg={16} md={24}>
                <Skeleton loading={loading} avatar active rows={1}> 
                  <Meta
                    avatar={<Avatar size="large" />}
                    title={name}
                    description={desc}
                  />
                </Skeleton>
              </Col>
              <Col lg={8} md={24}>
                <Skeleton loading={loading} active>
                  <Row>
                    <Col span={12} style={{textAlign: 'center'}}>
                      <p>加贸手册</p>
                      <p>18/18</p>
                    </Col>
                    <Col span={12} style={{textAlign: 'center'}}>
                      <p>报关单</p>
                      <p>14</p>
                    </Col>
                  </Row>
                </Skeleton>
              </Col>
            </Row>

        </Card>
        <Row gutter={16}>
          <Col lg={16} md={24}>
            <Card title="最近表单" style={{marginBottom: 15}} bordered={false}>
                <Skeleton loading={loading} active>
                  <Card.Grid style={gridStyle}>
                    <p>D201812180</p>
                    <p>订单状态： 草稿</p>
                    <p>张三三 23小时前</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <p>D201812180</p>
                    <p>订单状态： 草稿</p>
                    <p>张三三 23小时前</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <p>D201812180</p>
                    <p>订单状态： 草稿</p>
                    <p>张三三 23小时前</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <p>D201812180</p>
                    <p>订单状态： 草稿</p>
                    <p>张三三 23小时前</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <p>D201812180</p>
                    <p>订单状态： 草稿</p>
                    <p>张三三 23小时前</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <p>D201812180</p>
                    <p>订单状态： 草稿</p>
                    <p>张三三 23小时前</p>
                  </Card.Grid>
                </Skeleton>
              </Card>
              <Card title="常用表单"  bordered={false} extra={<a>更多</a>} >
                <Skeleton loading={loading}  active>
                  {/* <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  /> */}
                  <span></span>
                </Skeleton>
              </Card>
          </Col>
          <Col lg={8} md={24}>
            <Card title="快速制单" style={{marginBottom: 15}}  bordered={false}>
              <Skeleton loading={loading}  active>
                <span style={{marginRight:20}}>贸易手册</span>            
                <span style={{marginRight:20}}>贸易手册</span>            
                <span style={{marginRight:20}}>贸易手册</span>            
                <span style={{marginRight:20}}>贸易手册</span> 
                <span style={{marginRight:20}}>贸易手册</span> 
                <span style={{marginRight:20}}>贸易手册</span> 
                <span style={{marginRight:20}}>贸易手册</span> 
              </Skeleton>
            </Card>
            <Card title="动态" bordered={false}>
              <Skeleton loading={loading}  active>
                Card content
              </Skeleton>
            </Card>
          </Col>

        </Row>
      </div>
    )
  }

}