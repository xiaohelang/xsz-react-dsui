import React , {Component}from 'react'
import {Card, Select } from 'antd'
const Option = Select.Option

class BaseSelect extends Component{
  
  render() {
    return (
      <div>
        <Card title="带搜索的select">
          <Select style={{ width: 150 }}
           placeholder="请选择一个领导"
           showSearch
          >
            < Option value="哈浪">哈浪</Option>
            < Option value="MR 肖">MR 肖</Option>
            < Option value="文娜">文娜</Option>
            < Option value="光醒">光醒</Option>
            < Option value="阿珠">阿珠</Option>
          </Select>
        </Card>
      </div>
    )
  }
}

export default BaseSelect