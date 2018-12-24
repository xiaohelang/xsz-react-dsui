import React , {Component}from 'react'
import {Card, Form, Icon, Input, Button,} from 'antd'
import './index.scss'


const FormItem = Form.Item
class BaseForm extends Component{

  render(){
    return (
      <div style={{position: 'relative', padding: 15 }}>
        <Card title="基础表单">
          <HorizontalLoginForm></HorizontalLoginForm>
        </Card>
        <Card className='cardTop'>
          登录
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