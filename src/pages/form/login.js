import React from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox  } from 'antd'
const FormItem = Form.Item;

class FormLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            length: 0
        }
    }
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
            }
        })
    }
    resetBtn = () => {
        this.props.form.resetFields();
    }

    handleClick = (e) => {
        let i = parseInt(e.target.dataset.hl)
        if (i >= this.state.length-1){
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: i+1
            })
        }
    }

    componentDidMount() {
        let indexInput = 'myInput'
        let ll = document.getElementsByClassName('hl')
        this.setState({
            length: ll.length
        })
    
        let self = this
        document.addEventListener('keydown',function(e){
            if (e.keyCode === 13){
                let myInput = self.refs[indexInput + self.state.index]
                myInput.focus()
                self.setState({
                    index: self.state.index + 1
                })
                if (self.state.index >= ll.length) {
                    self.setState({
                        index: 0
                    })
                } 
            }
        })

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return <div>
            <Card title="登录行内表单">
                <Form layout="inline" ref="myInput">
                    <FormItem>
                        <Input className='hl' data-hl='0' onClick={this.handleClick}  ref="myInput0" placeholder="请输入用户名"></Input>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='1' onClick={this.handleClick}  ref="myInput1" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='2' onClick={this.handleClick}  ref="myInput2" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='3' onClick={this.handleClick}  ref="myInput3" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='4' onClick={this.handleClick}  ref="myInput4" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='5' onClick={this.handleClick}  ref="myInput5" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='6' onClick={this.handleClick}  ref="myInput6" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='7' onClick={this.handleClick}  ref="myInput7" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='8' onClick={this.handleClick}  ref="myInput8" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='9' onClick={this.handleClick}  ref="myInput9" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">登录</Button>
                    </FormItem>
                    <FormItem>
                        <Input className='hl' data-hl='10' onClick={this.handleClick}  ref="myInput10" placeholder="请输入密码"></Input>
                    </FormItem>
                </Form>
            </Card>
            <Card title="登录水平表单" style={{marginTop: 10}}>
                <Form style={{ width: 300 }}>
                    <FormItem>
                        {
                            getFieldDecorator('userName', {
                                initialValue: '',
                                rules: [
                                    {
                                        required: true,
                                        message: '用户名不能为空'
                                    },
                                    {
                                        min: 5, max: 10,
                                        message: '长度不在范围内'
                                    },
                                    {
                                        pattern: new RegExp('^\\w+$', 'g'),
                                        message: '用户名必须为字母或者数字'
                                    }
                                ]
                            })(
                                <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
                                )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('userPwd', {
                                initialValue: '',
                                rules: [
                                    {
                                        required: true,
                                        message: '密码不能为空'
                                    },
                                    ,
                                    {
                                        min: 6, max: 20,
                                        message: '密码长度必须大于6位小于20位'
                                    }
                                ]
                            })(
                                <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />
                                )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Checkbox>记住密码</Checkbox>
                                )
                        }
                        <a href="#" style={{ float: 'right' }}>忘记密码</a>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        <Button style={{marginLeft: 20}} onClick={this.resetBtn}>重置</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    }
}
export default Form.create()(FormLogin);