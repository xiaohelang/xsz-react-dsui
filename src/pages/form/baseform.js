import React , {Component}from 'react'
import {Card, Form, Icon, Input, Button, Select } from 'antd'
import './index.scss'


const FormItem = Form.Item
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


class BaseForm extends Component{
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  render(){
    return (
      <div style={{position: 'relative', padding: 15 }}>
        <Card title="基础表单">
          <HorizontalLoginForm></HorizontalLoginForm>
        </Card>
        <Card className='card-top'>
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Tags Mode"
          onChange={this.handleChange}
        >
          {children}
        </Select>,
        </Card>
        
      </div>
    )
  }
}

class HorizontalLoginForm extends Component{
  
  render(){
    // const {
    //   getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    // } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem>
          {/* {
            getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })()
          } */}
          <Input  placeholder="用户名" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}></Input>
        </FormItem>
        <FormItem>
          <Input  placeholder="密码" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" disabled="false">登录</Button>
        </FormItem>
      </Form>
    )
  }
}

export default BaseForm