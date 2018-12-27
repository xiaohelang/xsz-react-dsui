import React , {Component}from 'react'
import {Card, Input, Select, Icon, Row, Col} from 'antd'


const Option = Select.Option
class BaseInput extends Component{
  render(){
    return (
      <div>
        <Card title="基本使用">
          <Row gutter={16}>
            <Col span={12} sm={24}>
              <Input  
                addonBefore="Http://" 
                addonAfter=".com" 
                defaultValue="hao123" 
                size="small" style={{width: 300}}></Input>
            </Col>
            <Col span={12} sm={24}>
              <Input  
                addonBefore="Http://" 
                addonAfter=".com" 
                defaultValue="hao123" 
                size="small" style={{width: 300}}></Input>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default BaseInput