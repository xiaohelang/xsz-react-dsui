import React, {Component} from 'react';
import { Card, Table, Modal, Badge, Button, message,Dropdown, Row, Col, Input, Menu, Icon } from 'antd';

const ButtonGroup = Button.Group
const {Search} = Input
class Check extends Component {
  state = {}
  componentDidMount() {
    const data = [
      {   
          key: 1,
          deskId: 'D20181211000070',
          inOutType: '进口',
          status: '1',
          yuOrderId: 'NO20181211001',
          orderId: 'NO20181211001',
          orderType: '普通清单',
          bookNo: 'E01045549295',
          companyNo: 'E01045549295',
          orderDate: '2018-12-11',
          address: '大地',
          mode: '来料加工',
          remark: '海关终审通过'
      },
      {   
        key: 1,
        deskId: 'D20181211000070',
        inOutType: '进口',
        status: '2',
        yuOrderId: 'NO20181211001',
        orderId: 'NO20181211001',
        orderType: '普通清单',
        bookNo: 'E01045549295',
        companyNo: 'E01045549295',
        orderDate: '2018-12-11',
        address: '大地',
        mode: '来料加工',
        remark: '海关终审通过'
      },
      {   
        key: 1,
        deskId: 'D20181211000070',
        inOutType: '进口',
        status: '3',
        yuOrderId: 'NO20181211001',
        orderId: 'NO20181211001',
        orderType: '普通清单',
        bookNo: 'E01045549295',
        companyNo: 'E01045549295',
        orderDate: '2018-12-11',
        address: '大地',
        mode: '来料加工',
        remark: '海关终审通过'
      },
      {   
        key: 1,
        deskId: 'D20181211000070',
        inOutType: '进口',
        status: '4',
        yuOrderId: 'NO20181211001',
        orderId: 'NO20181211001',
        orderType: '普通清单',
        bookNo: 'E01045549295',
        companyNo: 'E01045549295',
        orderDate: '2018-12-11',
        address: '大地',
        mode: '来料加工',
        remark: '海关终审通过'
      },
      {   
        key: 1,
        deskId: 'D20181211000070',
        inOutType: '进口',
        status: '5',
        yuOrderId: 'NO20181211001',
        orderId: 'NO20181211001',
        orderType: '普通清单',
        bookNo: 'E01045549295',
        companyNo: 'E01045549295',
        orderDate: '2018-12-11',
        address: '大地',
        mode: '来料加工来料',
        remark: '海关终审通过'
      }
    ]
    const columns = [
      {
        title: '平台单证号',
        key: 'deskId',
        dataIndex: 'deskId',
        width: 140
      },
      {
        title: '进出口类型',
        key: 'inOutType',
        dataIndex: 'inOutType',
        width: 100
      },
      {
        title: '审批状态',
        key: 'status',
        dataIndex: 'status',
        width: 100,
        render(abc) {
          let config = {
              '1': <Badge status="success" text="通过" />,
              '2': <Badge status="error" text="失败" />,
              '3': <Badge status="default" text="草稿" />,
              '4': <Badge status="processing" text="进行中" />,
              '5': <Badge status="warning" text="警告" />
          }
          return config[abc];
        }
      },
      {
        title: '预录入统一编号',
        key: 'yuOrderId',
        dataIndex: 'yuOrderId',
        width: 140
      },
      {
        title: '清单编号',
        key: 'orderId',
        dataIndex: 'orderId',
        width: 140
      },
      {
        title: '清单类型',
        key: 'orderType',
        dataIndex: 'orderType',
        width: 100
      },
      {
        title: '手(账)册编码',
        key: 'bookNo',
        dataIndex: 'bookNo',
        width: 140
      },
      {
        title: '企业内部编号',
        key: 'companyNo',
        dataIndex: 'companyNo',
        width: 140
      },
      {
        title: '清单申报日期',
        key: 'orderDate',
        dataIndex: 'orderDate',
        width: 120
      },
      {
        title: '申报地海关',
        key: 'address',
        dataIndex: 'address',
        width: 120
      },
      {
        title: '监管方式',
        key: 'mode',
        dataIndex: 'mode',
        width: 120
      },
      {
        title: '审批备注',
        key: 'remark',
        dataIndex: 'remark'
      }
    ]
    this.setState({
      dataSource: data,
      columns
  })
  }
  render(){
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
    return <div>
      <Card>
        <Row style={{marginBottom:10}}>
          <Col xl={10} lg={10}>
            <Button style={{marginRight: 5}} size="small" icon="plus" type="primary">新增</Button>
            <ButtonGroup size="small" value="small">
              <Button icon="edit">编辑</Button>
              <Button icon="copy">复制</Button>
              <Button icon="delete">删除</Button>
              <Button icon="arrow-right">发送</Button>
              <Button icon="printer">打印</Button>
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
              placeholder="手(账)册编号/清单编号" 
              onSearch={value => console.log(value)} enterButton />
            <ButtonGroup size="small" value="small">
              <Dropdown overlay={menuDate}>
                <Button size="small" icon="filter">状态<Icon type="down" /></Button>
              </Dropdown>
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
          scroll={{ y: 440, x: 1600 }}
        />
      </Card>
    </div>
  }
}

export default Check