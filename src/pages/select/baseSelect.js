import React , {Component}from 'react'
import {Card, Select, Spin } from 'antd'
const Option = Select.Option

class BaseSelect extends Component{
  state = {
    fetching: true,
    data: [
      {
        text: '哈浪',
        value: '哈浪'
      },
      {
        text: '文娜',
        value: '文娜'
      },
      {
        text: '光醒',
        value: '光醒'
      },
      {
        text: '阿珠',
        value: '阿珠'
      },
      {
        text: 'MR肖',
        value: 'MR肖'
      },
    ],
    data2: ['哈浪1', '哈浪2', '哈浪3', '哈浪4'],
    selectedItems: []
  }
  handleChange = (selectedItems) => {
    this.setState({ selectedItems })
  }
  render() {
    const {data, fetching, selectedItems, data2} = this.state
    const filteredOptions = data2.filter(o => !selectedItems.includes(o))
    return (
      <div>
        <Card title="带搜索的select">
          <Select style={{ width: 150 }}
           placeholder="请选择一个人"
           showSearch
          >
            < Option value="哈浪">哈浪</Option>
            < Option value="MR肖">MR 肖</Option>
            < Option value="文娜">文娜</Option>
            < Option value="光醒">光醒</Option>
            < Option value="阿珠">阿珠</Option>
          </Select>
        </Card>
        <Card title="用户搜索" style={{marginTop: 15}}>
          <Select style={{ width: 450 }}
           placeholder="请选择一个人"
           mode="multiple"
           filterOption={false}
           notFoundContent={fetching ? <Spin size="small" /> : null}
           labelInValue
           showSearch
          >
            {data.map( d => < Option key={d.value}  value={d.value}>{d.text}</Option>)}
          </Select>
        </Card>
        <Card title="隐藏已选选项" style={{marginTop: 15}}>
          <Select style={{ width: 450 }}
           placeholder="请选择一个人"
           mode="multiple"
           value={selectedItems}
           onChange={this.handleChange}
           notFoundContent={fetching ? <Spin size="small" /> : null}
           showSearch
          >
            {filteredOptions.map( d => < Option key={d}  value={d}>{d}</Option>)}
          </Select>
        </Card>
        <Card title="自动分词 只在 tags 和 multiple 模式下可用" style={{marginTop: 15}}>
          <Select style={{ width: 450 }}
           placeholder="请选择一个人"
           mode="tags"
           tokenSeparators={[',',' ', '，', '  ']}
           showSearch
          >
            {data.map( d => < Option key={d.value}  value={d.value}>{d.text}</Option>)}
          </Select>
        </Card>
      </div>
    )
  }
}
export default BaseSelect