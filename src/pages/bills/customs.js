import React from 'react';
import { Card, Table, Modal, Form, Button, Icon, Menu, Input, Badge, Select, Tree, Dropdown,  } from 'antd';
import { Resizable } from 'react-resizable';
import Sortable from 'sortablejs'
import './index.scss'
import Axios from './../../axios/axios'

const Column = Table.Column
const ButtonGroup = Button.Group;
const Search = Input.Search;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;

const FormItem = Form.Item;
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);
const ResizeableTitle = (props) => {
    const { onResize, width, ...restProps } = props;

    if (!width) {
        return <th {...restProps} />;
    }
    return (
        <Resizable width={width} height={0} onResize={onResize}>
            <th {...restProps} />
        </Resizable>
    );
};

// 渲染单元格类
class EditableCell extends React.Component {
    state = {
        editing: false,
    }

    componentDidMount() {
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    }


    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    }

    handleClickOutside = (e) => {
        const { editing } = this.state;
        if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save();
        }
    }

    save = () => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    }


    render() {
        const { editing } = this.state;
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {(form) => {
                            this.form = form;
                            return (
                                editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                        {form.getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `${title} is required.`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input
                                                ref={node => (this.input = node)}
                                                onPressEnter={this.save}
                                            />
                                        )}
                                    </FormItem>
                                ) : (
                                        <div
                                            className="editable-cell-value-wrap"
                                            style={{ paddingRight: 24 }}
                                            onClick={this.toggleEdit}
                                        >
                                            {restProps.children}
                                        </div>
                                    )
                            );
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}

export default class Costoms extends React.Component {

    state = {
        filteredInfo: null,
        sortedInfo: null,
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        title: '全部',
        isDrag: true,
        columns: [{
            title: '日期',
            dataIndex: 'date',
            width: 200,
            editable: true,
            key: 'date',
            // sorter: (a, b) => a.date - b.date,
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
            defaultSortOrder: 'ascend'
            // defaultSortOrder: 'descend'ascend
        }, {
            title: '账单',
            dataIndex: 'amount',
            width: 200,
            editable: true,
            key: 'amount',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.amount - b.amount,
            // sorter: (a, b) => a.date.length - b.date.length,
        }, {
            title: '类型',
            dataIndex: 'type',
            width: 100,
            key: 'type',
            filters: [
                { text: 'income', value: 'income' },
                { text: 'output', value: 'output' },
            ],
            onFilter: (value, record) => record.type.indexOf(value) === 0,
            sorter: (a, b) => a.type.length - b.type.length,
        }, {
            title: '标识',
            dataIndex: 'note',
            width: 100,
            render(abc) {
                let config = {
                    '1': <Badge status="success" text="成功" />,
                    '2': <Badge status="error" text="报错" />,
                    '3': <Badge status="default" text="正常" />,
                    '4': <Badge status="processing" text="进行中" />,
                    '5': <Badge status="warning" text="警告" />
                }
                return config[abc];
            },
            key: 'note',
            filters: [
                { text: '成功', value: '1' },
                { text: '报错', value: '2' },
                { text: '正常', value: '3' },
                { text: '进行中', value: '4' },
                { text: '警告', value: '5' },
            ],
            onFilter: (value, record) => record.note.indexOf(value) === 0,
        }, {
            title: '操作',
            key: 'action',
            render: () => (
                <a href="javascript:;">Delete</a>
            ),
        }],
        dataSource: [{
            key: 0,
            date: '2018-02-11',
            amount: 120,
            type: 'income',
            note: '1',
        }, {
            key: 1,
            date: '2018-03-11',
            amount: 243,
            type: 'output',
            note: '2',
        }, {
            key: 2,
            date: '2018-04-11',
            amount: 98,
            type: 'output',
            note: '3',
        }, {
            key: 3,
            date: '2018-04-11',
            amount: 98,
            type: 'income',
            note: '5',
        }, {
            key: 4,
            date: '2018-04-11',
            amount: 98,
            type: 'output',
            note: '4',
        }, {
            key: 5,
            date: '2018-04-11',
            amount: 98,
            type: 'income',
            note: '5',
        }]
    };
    components = {
        header: {
            cell: ResizeableTitle,
        },
        body: {
            row: EditableFormRow,
            cell: EditableCell,
        }
    };


    handleResize = index => (e, { size }) => {
        console.log('拖拽----222')
        console.log(e)
        // this.setState({isDrag: false})
        this.setState(({ columns }) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return { columns: nextColumns };
        });
    };
    handleChangeSelect = (value) => {
        console.log(`selected ${value}`);
    }
    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }
    // 下拉框方法
    handleVisibleChange1 = (flag) => {
        this.setState({ visible1: flag });
    }
    handleVisibleChange2 = (flag) => {
        this.setState({ visible2: flag });
    }
    handleVisibleChange3 = (flag) => {
        this.setState({ visible3: flag });
    }
    handleVisibleChange4 = (flag) => {
        this.setState({ visible4: flag });
    }
    // 编辑单元格保存
    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    }

    componentDidMount() {

        Axios.ajax({url: '/namelist'}).then((res) => {
            console.log('res')
            console.log(res)
        }, (err) => {
            console.log('err')
            console.log(err)
        })
        let self = this
        function gg(isOk) {
            const el = document.querySelector('.ant-table tr')
            // self.setState({isDrag: false})
            // let isOk = self.state.isDrag
            self.sortable = Sortable.create(el, {
                animation: 180,
                disabled: isOk,
                delay: 0,
                onEnd: evt => {
                    
                    console.log('-----对换列---')
                    console.log(evt)
                    self.setState({isDrag: true})
                    let columns = self.state.columns
                    let oldIndex = evt.oldIndex - 1
                    let newIndex = evt.newIndex - 1
                    const oldItem = columns[oldIndex]
                    columns.splice(oldIndex, 1)
                    columns.splice(newIndex, 0, oldItem)
                    console.log(self.state.columns)
                    self.setState({ columns: columns })
                    let arr = self.state.dataSource
                    self.setState({ dataSource: arr })
                }
            })
        }
        // let doms = document.getElementsByClassName('react-resizable-handle')
        // for (let i=0; i< doms.length; i++) {
        //     let dom = doms[i]
        //     dom.addEventListener('mousedown', function() {
        //         this.removeEventListener('mouseup', function() {console.log('移除u')})
        //         console.log('onmousedown')
        //         gg(false)
        //     })
        //     dom.addEventListener('mouseup', function() {
        //         console.log('mouseup')
        //         gg(false)
        //     })
        // }

        const el = document.querySelector('.ant-table tr')
        
        let isOk = this.state.isDrag
        this.sortable = Sortable.create(el, {
            animation: 180,
            disabled: false,
            delay: 0,
            onEnd: evt => {
                console.log('-----对换列---')
                console.log(evt)
                let columns = this.state.columns
                let oldIndex = evt.oldIndex - 1
                let newIndex = evt.newIndex - 1
                const oldItem = columns[oldIndex]
                columns.splice(oldIndex, 1)
                columns.splice(newIndex, 0, oldItem)
                console.log(this.state.columns)
                this.setState({ columns: columns })
                let arr = this.state.dataSource
                this.setState({ dataSource: arr })
            }
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
        // const columns = this.state.columns.map((col, index) => ({
        //     ...col,
        //     onHeaderCell: column => ({
        //         width: column.width,
        //         onResize: this.handleResize(index),
        //     }),
        // }));

        // 编辑列
        const columns = this.state.columns.map((col, index) => {
            // if (!col.editable) {
            //   return col;
            // }
            return {
                ...col,
                onHeaderCell: column => ({
                    width: column.width,
                    onResize: this.handleResize(index),
                }),
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                })
            };
        });
        // 定义下拉框树结构
        const menu1 = (
            <div style={{ width: 150, maxHeight: 200, overflow: 'auto', border: '1px solid #ccc', background: '#fff' }}>
                <Tree
                    checkable
                    defaultExpandedKeys={['0-1', '0-2']}
                    defaultSelectedKeys={['0-1', '0-2']}
                    defaultCheckedKeys={['0-1', '0-2']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                >
                    <TreeNode title={this.state.title} key="0">
                        <TreeNode title="原产证1" key="0-1" />
                        <TreeNode title="原产证2" key="0-2" />
                        <TreeNode title="原产证3" key="0-3" />
                        <TreeNode title="原产证4" key="0-4" />
                        <TreeNode title="原产证5" key="0-5" />
                    </TreeNode>
                </Tree>
            </div>
        );
        const menu2 = (
            <div style={{ width: 150, maxHeight: 200, overflow: 'auto', border: '1px solid #ccc', background: '#fff' }}>
                <Tree
                    checkable
                    defaultExpandedKeys={['0-1', '0-2']}
                    defaultSelectedKeys={['0-1', '0-2']}
                    defaultCheckedKeys={['0-1', '0-2']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                >
                    <TreeNode title={this.state.title} key="0">
                        <TreeNode title="全部" key="0-1" />
                        <TreeNode title="新证" key="0-2" />
                        <TreeNode title="待审核" key="0-3" />
                        <TreeNode title="已审核" key="0-4" />
                        <TreeNode title="通过" key="0-5" />
                    </TreeNode>
                </Tree>
            </div>
        );
        const menu3 = (
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
        const menu4 = (
            <div style={{ width: 150, maxHeight: 200, overflow: 'auto', border: '1px solid #ccc', background: '#fff' }}>
                <Menu>
                    <Menu.Item>
                        <a rel="noopener noreferrer" > <Icon type="pie-chart" theme="outlined" />自定义列表</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a rel="noopener noreferrer" > <Icon type="pie-chart" theme="outlined" />数据导入</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a rel="noopener noreferrer" > <Icon type="pie-chart" theme="outlined" />按发票号排序</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a rel="noopener noreferrer" > <Icon type="pie-chart" theme="outlined" />按证书编码号排序</a>
                    </Menu.Item>
                </Menu>
            </div>
        );
        return <div>
            <Card>
                <div className="card-wrap boxflex">
                    <div>
                        <Button size="small" icon="plus" type="primary">新增</Button>
                        <div style={{ display: 'inline' }}>
                            <ButtonGroup size="small" value="small">
                                <Button icon="edit" style={{ marginRight: 0 }}>编辑</Button>
                                <Button icon="copy" style={{ marginRight: 0 }}>复制</Button>
                                <Button icon="delete" >删除</Button>
                            </ButtonGroup>
                        </div>
                        <div style={{ display: 'inline' }}>
                            <ButtonGroup size="small">
                                <Button icon="swap-right" style={{ marginRight: 0 }}>发送</Button>
                                <Button icon="audit" >改证重发</Button>
                            </ButtonGroup>
                        </div>
                        <Button size="small" icon="pic-center" >打印</Button>
                    </div>
                    <div>
                        <Search size="small" style={{ width: 200, marginRight: 10, paddingRight: -10 }} placeholder="平台单据号/发票号" onSearch={value => console.log(value)} enterButton />
                        {/* <Select
                            size="small"
                            showSearch
                            style={{ width: 100 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.handleChangeSelect}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select> */}
                        <Dropdown overlay={menu1}
                            trigger={['click']}
                            onVisibleChange={this.handleVisibleChange1}
                            visible={this.state.visible1}>
                            <Button style={{ marginRight: 0 }} size="small" icon="filter">类型<Icon type="down" /></Button>
                        </Dropdown>
                        <Dropdown overlay={menu2}
                            trigger={['click']}
                            onVisibleChange={this.handleVisibleChange2}
                            visible={this.state.visible2}>
                            <Button style={{ marginRight: 0 }} size="small" icon="filter">状态<Icon type="down" /></Button>
                        </Dropdown>
                        <Dropdown overlay={menu3}
                            trigger={['click']}
                        >
                            <Button style={{ marginRight: 0 }} size="small" icon="sort-ascending">排序<Icon type="down" /></Button>
                        </Dropdown>
                        <Dropdown overlay={menu4}
                            trigger={['click']}
                        >
                            <Button size="small" icon="ellipsis">更多<Icon type="down" /></Button>
                        </Dropdown>
                    </div>
                </div>
                {/* <Table
                    bordered
                    columns={columns}
                    dataSource={this.state.dataSource}
                    pagination={false}
                    rowSelection={rowSelection}
                /> */}
                <Table size="small"
                    appendColumnFooterTop={true}
                    scroll={{ y: 240 }}
                    bordered
                    columnDragable='true'
                    pagination={{ pageSize: 4 }}
                    components={this.components}
                    columns={columns}
                    dataSource={this.state.dataSource}
                    rowSelection={rowSelection}
                    rowClassName={() => 'editable-row'}
                    onHeaderCell={(col) => {
                        return{
                            onClick: () => { console.log('009')}
                        }
                    }}
  
                >
                    <Column
                        footer={(data) => <div>Summary: {data.reduce((sum, record) => sum + record.age, 0)}</div>}
                    />
                </Table>

            </Card>
        </div >
    }
}
