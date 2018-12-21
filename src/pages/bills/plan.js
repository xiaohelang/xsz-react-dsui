
import React from 'react';
import { Card, Table, Modal, Button, message, Row, Col, Input, Dropdown, Menu, Icon} from 'antd';
import axios from "axios";
import {connect} from 'react-redux'
import { Resizable } from 'react-resizable';
// import { actionPlan } from './../../redux/action'
// import axios from './../../axios/index'

const ButtonGroup = Button.Group;
const {Search} = Input;

class BasicTable extends React.Component {
    state = {}
    componentDidMount() {
        let item =  {   
          deskId: 'D20181211000070',
          orderId: 'NO201812110001',
          orderType: '进口',
          bookNo: 'E01045549295',
          orderDate: '2018-12-11',
          recevieName: '大连涵丹商务咨询有限公司',
          sendName: '大树',
          remark: '无',
          createDate: '2018-12-12'
        }
        const data = [
            {   
                key: 1,
                deskId: 'D20181211000070',
                orderId: 'NO201812110001',
                orderType: '进口',
                bookNo: 'E01045549295',
                orderDate: '2018-12-11',
                recevieName: '大连涵丹商务咨询有限公司',
                sendName: '大树',
                remark: '无',
                createDate: '2018-12-12'
            },
            {   
              key: 2,
              deskId: 'D20181211000070',
              orderId: 'NO201812110001',
              orderType: '进口',
              bookNo: 'E01045549295',
              orderDate: '2018-12-11',
              recevieName: '大连涵丹商务咨询有限公司',
              sendName: '大树',
              remark: '无',
              createDate: '2018-12-12'
          },
          {   
            key: 3,
            deskId: 'D20181211000070',
            orderId: 'NO201812110001',
            orderType: '进口',
            bookNo: 'E01045549295',
            orderDate: '2018-12-11',
            recevieName: '大连涵丹商务咨询有限公司',
            sendName: '大树',
            remark: '无',
            createDate: '2018-12-12'
          },
          {   
            key: 4,
            deskId: 'D20181211000070',
            orderId: 'NO201812110001',
            orderType: '进口',
            bookNo: 'E01045549295',
            orderDate: '2018-12-11',
            recevieName: '大连涵丹商务咨询有限公司',
            sendName: '大树',
            remark: '无',
            createDate: '2018-12-12'
          }
        ]
        for(let i = 0; i < 10; i++) {
          item.key = 'key' + i
          data.push(item)
          console.log(data)
        }
        // console.log(data)
        const columns = [
            {
              title: '平台单证号',
              key: 'deskId',
              dataIndex: 'deskId',
              width: 140
            },
            {
              title: '单据编号',
              key: 'orderId',
              dataIndex: 'orderId',
              width: 140
            },
            {
              title: '单据类型',
              key: 'orderType',
              dataIndex: 'orderType',
              width: 100
            },
            {
              title: '手(账)册编码',
              key: 'bookNo',
              dataIndex: 'bookNo',
              width: 120
            },
            {
              title: '单据日期',
              key: 'orderDate',
              dataIndex: 'orderDate',
              width: 100
            },
            {
              title: '收货人名字',
              key: 'recevieName',
              dataIndex: 'recevieName',
              width: 200
            },
            {
              title: '发货人名字',
              key: 'sendName',
              dataIndex: 'sendName',
              width: 200
            },
            {
              title: '备注',
              key: 'remark',
              dataIndex: 'remark'
            },
            {
              title: '创建日期',
              key: 'createDate',
              dataIndex: 'createDate',
              width: 120
            }
        ]
        this.setState({
            dataSource: data,
            columns
        })
        axios({
            method: 'post',
            url: 'https://www.easy-mock.com/mock/5b9f622a5694a202aaae4859/hl-manage/table/info',
            data: {}
        }).then((res) => {
            console.log('----res---')
            console.log(res)
        }, (err) =>{
            console.log('-----err---')
            console.log(err)
        })
    }

    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
        }
        const menuDate = (
          <div style={{ width: 150, maxHeight: 200, overflow: 'auto', border: '1px solid #ccc', background: '#fff' }}>
              <Menu>
                  <Menu.Item>
                      <a rel="noopener noreferrer" >按制单日期排序</a>
                  </Menu.Item>
                  <Menu.Item>
                      <a rel="noopener noreferrer" >按发票日期排序</a>
                  </Menu.Item>
                  <Menu.Item>
                      <a rel="noopener noreferrer" >按发票号排序</a>
                  </Menu.Item>
                  <Menu.Item>
                      <a rel="noopener noreferrer" >按证书编码号排序</a>
                  </Menu.Item>
              </Menu>
          </div>
      );
        const {columns} = this.state
        return (
            <div>
                <Card>
                  <Row style={{marginBottom:10}}>
                    <Col xl={10} lg={10}>
                      <Button style={{marginRight: 5}} size="small" icon="plus" type="primary">新增</Button>
                      <ButtonGroup size="small" value="small">
                        <Button icon="edit">编辑</Button>
                        <Button icon="copy">复制</Button>
                        <Button icon="delete">删除</Button>
                        <Button icon="diff">生成核注清单</Button>
                        <Button icon="redo">刷新</Button>
                      </ButtonGroup>
                    </Col>
                    <Col xl={4} lg={4}>
                      <ButtonGroup size="small" value="small">
                        <Button>全部</Button>
                        <Button>进口</Button>
                        <Button>出口</Button>
                      </ButtonGroup>
                    </Col>
                    <Col xl={10} lg={10}  style={{textAlign: 'right'}}>
                      <Search size="small" style={{ width: 200, marginRight: 10, paddingRight: -10 }} 
                        placeholder="平台单据号/发票号" 
                        onSearch={value => console.log(value)} enterButton />
                      <ButtonGroup size="small" value="small">
                        <Dropdown overlay={menuDate}>
                          <Button size="small" icon="sort-ascending">排序<Icon type="down" /></Button>
                        </Dropdown>
                        <Dropdown overlay={menuDate}>
                          <Button size="small" icon="ellipsis">更多<Icon type="down" /></Button>
                        </Dropdown>
                      </ButtonGroup>
                    </Col>
                  </Row>
                  <Table
                      size="small"
                      bordered
                      columns={columns}
                      dataSource={this.state.dataSource}
                      pagination={false}
                      rowSelection={rowSelection}
                      scroll={{ y: 440 }}
                  />
                </Card>
            </div>)
    }
}

export default BasicTable