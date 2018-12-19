
import React from 'react';
import { Card, Table, Modal, Button, message } from 'antd';
import axios from "axios";
import {connect} from 'react-redux'
import { Resizable } from 'react-resizable';
// import { actionPlan } from './../../redux/action'
// import axios from './../../axios/index'

class BasicTable extends React.Component {
    state = {}
    componentDidMount() {
        const data = [
            {   
                key: 1,
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: 1
            },
            {
                key: 2,
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: 2
            },
            {
                key: 3,
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: 3
            },
            {
                key: 4,
                id: '3',
                userName: 'DaShu',
                sex: '2',
                state: 4
            },
            {
                key: 5,
                id: '4',
                userName: 'DaShu2',
                sex: '1',
                state: 5
            },
            {
                key: 6,
                id: '5',
                userName: 'DaShu3',
                sex: '2',
                state: 6
            }
        ]
        const columns = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id',
                width: 100
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width: 100
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width: 100,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
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

    handleClick = () => {
        // const { dispatch } = this.props;
        // const {dataSource, columns} = this.state
        // dispatch(actionPlan(columns, dataSource));
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
        const {columns} = this.state
        return (
            <div>
                <Card>
                    <div  className="card-wrap">
                        <Button onClick={this.handleClick} icon="plus" type="primary">新增</Button>
                        <Button icon="edit">编辑</Button>
                        <Button icon="edit">复制</Button>
                        <Button icon="delete">删除</Button>
                        <Button shape="circle" icon="search"></Button>
                        <Button icon="search"> 生成核注清单</Button>
                    </div>
                    <Table
                        size="small"
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        rowSelection={rowSelection}
                    />
                </Card>
                <Card>
                    <div  className="card-wrap">
                        <Button onClick={this.handleClick} icon="plus" type="primary">新增</Button>
                        <Button icon="edit">编辑</Button>
                        <Button icon="edit">复制</Button>
                        <Button icon="delete">删除</Button>
                        <Button shape="circle" icon="search"></Button>
                        <Button icon="search"> 生成核注清单</Button>
                    </div>
                    <Table
                        size="small"
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        rowSelection={rowSelection}
                    />
                </Card>
                <Card>
                    <div  className="card-wrap">
                        <Button onClick={this.handleClick} icon="plus" type="primary">新增</Button>
                        <Button icon="edit">编辑</Button>
                        <Button icon="edit">复制</Button>
                        <Button icon="delete">删除</Button>
                        <Button shape="circle" icon="search"></Button>
                        <Button icon="search"> 生成核注清单</Button>
                    </div>
                    <Table
                        size="small"
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        rowSelection={rowSelection}
                    />
                </Card>
            </div>)
    }
}

export default BasicTable