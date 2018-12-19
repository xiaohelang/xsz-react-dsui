import React from 'react';
import { Card, Table, Modal, Button, message } from 'antd';
import { Resizable } from 'react-resizable';
import './index.less';
import { connect } from 'react-redux'
// import axios from './../../axios/index'

const ResizeableTitle = (props) => {
    const { onResize, width, ...restProps } = props;
  
    if (!width) {
      return <th {...restProps} />;
    }

    console.log('拖拽----')
  
    return (
      <Resizable width={width} height={0} onResize={onResize}>
        <th {...restProps} />
      </Resizable>
    );
  };


class Check extends React.Component {
    state = {
        columns: [{
          title: '日期',
          dataIndex: 'date',
          width: 200,
        }, {
          title: '账单',
          dataIndex: 'amount',
          width: 200,
        }, {
          title: '类型',
          dataIndex: 'type',
          width: 100,
        }, {
          title: '标识',
          dataIndex: 'note',
          width: 100,
        }, {
          title: '操作',
          key: 'action',
          render: () => (
            <a href="javascript:;">Delete</a>
          ),
        }],
     };
     components = {
        header: {
          cell: ResizeableTitle,
        },
      };
    
    data = [{
        key: 0,
        date: '2018-02-11',
        amount: 120,
        type: 'income',
        note: 'transfer',
      }, {
        key: 1,
        date: '2018-03-11',
        amount: 243,
        type: 'income',
        note: 'transfer',
      }, {
        key: 2,
        date: '2018-04-11',
        amount: 98,
        type: 'income',
        note: 'transfer',
    }];

    handleResize = index => (e, { size }) => {
        console.log('拖拽----222')
        this.setState(({ columns }) => {
          const nextColumns = [...columns];
          nextColumns[index] = {
            ...nextColumns[index],
            width: size.width,
          };
          return { columns: nextColumns };
        });
      };
      render() {
        const columns = this.state.columns.map((col, index) => ({
          ...col,
          onHeaderCell: column => ({
            width: column.width,
            onResize: this.handleResize(index),
          }),
        }));
        const {planTable, planCol} = this.props;
        return (
            <div>
                <Table
                  size="small"
                  bordered
                  components={this.components}
                  columns={columns}
                  dataSource={this.data}
                />
                <br/>
                <Table
                    bordered
                    columns={planCol}
                    dataSource={planTable}
                />
            </div>
        );
      }

}

const mapStateToProps = state => {
    return {
        planCol: state.planCol,
        planTable: state.planTable
    }
};

export default connect(mapStateToProps)(Check)