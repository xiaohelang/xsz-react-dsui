import React , {Component}from 'react'
import {Card, Input, Select, Icon, Row, Col, InputNumber, DatePicker, AutoComplete } from 'antd'

const {Option} = Select
const {Search, TextArea, Group} = Input;

class BaseInput extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      dataSource: []
    };
  }
  onSearch = (value) =>{
    console.log('search---')
    console.log(value)
  }
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
  handleChange = (value) => {
    this.setState({
      dataSource: !value || value.indexOf('@') >= 0 ? [] : [
        `${value}@gmail.com`,
        `${value}@163.com`,
        `${value}@qq.com`,
      ],
    });
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  render(){
    const { userName } = this.state;
    const selectBefore = (
      <Select defaultValue="Http://" style={{ width: 90 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
      </Select>
    );
    const selectAfter = (
      <Select defaultValue=".com" style={{ width: 80 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
      </Select>
    );
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null
    return (
      <div>
        <Card title="基本使用">
          <Row gutter={16}>
            <Col lg={12} md={12}>
              <Input 
                size="small" style={{width: 200}}></Input>
            </Col>
            <Col lg={12} md={12}>
              <Input  
                addonBefore="Http://" 
                addonAfter=".com" 
                defaultValue="hao123" 
                size="small" style={{width: 300}}></Input>
            </Col>
          </Row>
          <Row gutter={16} style={{marginTop: 20}}>
            <Col lg={12} md={12}>
              <Input size="small" addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            </Col>
            <Col lg={12} md={12}>
              <Input size="small" addonBefore={selectBefore} addonAfter={<Icon type="setting" />} defaultValue="mysite" />
            </Col>
          </Row>
        </Card>
        <Card title="前置/后置标签 用于配置一些固定组合。" style={{marginTop: 20}}>
          <Row gutter={16}>
            <Col lg={12} md={12}>
              <Search 
                placeholder="input search text"
                onSearch={this.onSearch}
                style={{ width: 200 }}
              />
          </Col>
            <Col lg={12} md={12}>
              <Search 
                placeholder="input search text"
                onSearch={this.onSearch}
                style={{ width: 200 }}
                enterButton
              />
            </Col>
          </Row>
          <Row gutter={16}  style={{marginTop: 20}}>
            <Col lg={12} md={12}>
              <Search
                size="large"
                placeholder="input search text"
                onSearch={this.onSearch}
                style={{ width: 300 }}
                enterButton="搜索"
              />
            </Col>
            <Col lg={12} md={12}>
              <Search
                size="large"
                placeholder="input search text"
                onSearch={this.onSearch}
                style={{ width: 300 }}
                enterButton
              />
            </Col>
          </Row>
        </Card>
        <Card title="适应文本高度的文本域 autosize 适用于 textarea 节点，高度会自动变化。autosize 可设为一个对象，指定最小最大行数。" style={{marginTop: 20}}>
          <Row gutter={16}>
            <Col lg={12} md={12}>
              <TextArea style={{ width: 300 }} placeholder="Autosize height based on content lines" autosize />
          </Col>
            <Col lg={12} md={12}>
              <TextArea style={{ width: 300 }} placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 1, maxRows: 3 }} />
            </Col>
          </Row>
        </Card>
        <Card title="前缀和后缀">
          <Row gutter={16}>
            <Col lg={12} md={12}>
            <Input
              style={{ width: 300 }}
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={suffix}
              value={userName}
              onChange={this.onChangeUserName}
              ref={node => this.userNameInput = node}
            />
            </Col>
            <Col lg={12} md={12}>
              <Search
                placeholder="input search text"
                onSearch={this.onSearch}
                style={{ width: 300 }}
                enterButton
              />
            </Col>
          </Row>
        </Card>
        <Card title="输入框的组合展现 compact 并不需要col">
          <Row gutter={16}>
            <Col lg={12} md={12}>
              <Group>
                <Col span={6}>
                  <Input defaultValue="0759"/>
                </Col>
                <Col span={10}>
                  <Input defaultValue="1352635"/>
                </Col>
              </Group>
            </Col>
            <Col lg={12} md={12}>
              <Group compact>
                <Input style={{ width: '30%' }} defaultValue="0759"/>
                <Input style={{ width: '50%' }} defaultValue="1352635"/>
              </Group>
            </Col>
          </Row>
          <Row gutter={16} style={{marginTop: 15}}>
            <Col lg={12} md={12}>
              <Group compact>
                <Select defaultValue="萝岗区" style={{ width: '20%' }}>
                  <Option value="天河区">天河区</Option>
                  <Option value="萝岗区">萝岗区</Option>
                </Select>
                <Input style={{ width: '50%' }} defaultValue="黄村街道黄村小学009号"/>
              </Group>
            </Col>
            <Col lg={12} md={12}>
              <Group compact>
                <Select defaultValue="爆米花" style={{ width: '30%' }}>
                  <Option value="爆米花">爆米花</Option>
                  <Option value="咖啡">咖啡</Option>
                </Select>
                <Input placeholder="备注" style={{ width: '40%' }}/>
                <InputNumber min={0} defaultValue={1} style={{ width: '15%' }}/>
              </Group>
            </Col>
          </Row>
          <Row gutter={16} style={{marginTop: 15}}>
            <Col lg={12} md={12}>
              <Group compact>
                <Input style={{ width: '30%' }}/>
                <DatePicker />
              </Group>
            </Col>
            <Col lg={12} md={12}>
              <Group compact>
                <Select style={{ width: '35%' }} defaultValue="Option1-1">
                 <Option value="Option1-1">Option1-1</Option>
                 <Option value="Option1-2">Option1-2</Option>
                </Select>
                <Select style={{ width: '35%' }} defaultValue="Option2-2">
                  <Option value="Option2-1">Option2-1</Option>
                  <Option value="Option2-2">Option2-2</Option>
                </Select>
              </Group>
            </Col>
          </Row>
          <Row gutter={16} style={{marginTop: 15}}>
            <Col lg={12} md={12}>
              <Group compact>
                <Select defaultValue="1">
                  <Option value="1">Between</Option>
                  <Option value="2">Except</Option>
               </Select>
               <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
               <Input
                 style={{
                   width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff',
                 }}
                 placeholder="~"
                 disabled
               />
               <Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
              </Group>
            </Col>
            <Col lg={12} md={12}>
              <Group compact>
                <Select defaultValue="注册">
                  <Option value="注册">注册</Option>
                  <Option value="登录">登录</Option>
                </Select>
                <AutoComplete
                  dataSource={this.state.dataSource}
                  style={{ width: 200 }}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </Group>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default BaseInput