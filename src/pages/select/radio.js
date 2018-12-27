import React , {Component}from 'react'
import {Card, Input, Select, Row, Col, Checkbox, Button } from 'antd'

const {Group} = Checkbox;
class BaseRadio extends Component{
  state = {
    plainOptions : ['第一排', '前部', '中部'],
    defaultCheckedList : ['第一排', '中部'],
    plainOptions2: ['后部', '末部'],
    plainOptions3: ['安全出口', '靠窗', '靠走廊'],
    plainOptions4: ['中间'],
    plainOptions5: ['其他'],
    span: 8
  }
  render() {
    const {plainOptions, defaultCheckedList, plainOptions2, plainOptions3, plainOptions4, plainOptions5, span} = this.state
    return (
      <div>
        <Card title="基础radio">
          <Row>
            <Col span={span}>
              <p>舱位喜好</p>
              <Col>
                <Group options={plainOptions} value={defaultCheckedList}/>
              </Col>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={span}>
              <Col>
                <Group options={plainOptions2}/>
              </Col>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={span} style={{marginTop: 15}}>
              <p>座位喜好</p>
              <Col>
                <Group options={plainOptions3}/>
              </Col>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={span}>
              <Col>
                <Group options={plainOptions4}/>
              </Col>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={span} style={{marginTop: 15}}>
              <p>个性座位</p>
              <Col>
                <Group options={plainOptions5}/>
              </Col>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row style={{marginTop: 140}}>
            <Col span={span}><Button type="primary" block>确定</Button></Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default BaseRadio