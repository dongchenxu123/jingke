import React from 'react'
import { DatePicker, Table, Spin  } from 'antd'
import {FormateNum} from '../../help/formate'
const { RangePicker } = DatePicker;
const style={
  spin: {
    textAlign: 'center',
    marginBottom: '20px',
    padding:'30px 50px',
    margin: '20px 0'
  }
}
class RecordView extends React.Component {
    onChange = (date, dateString) => {
        // console.log(date, dateString);
    }
    renderTable = (columns) => {
       const data = this.props.data
       if (data.length > 0) {
          return (
            <Table columns={columns} dataSource={data} rowKey={record => record.id}/>
          )
       } else {
         return (
           <div style={{width: '200px', margin: '20px auto'}}>暂无数据</div>
         )
       }
    }
    render () {
        const {loading} = this.props
        const columns = [{
            title: '时间',
            key: 1,
            render: (text, record) => (
              <span>{record.created ? record.created : record.gmt_payment}</span>
            )
          }, {
            title: '方向',
            dataIndex: 'type',
            key: 2,
          }, {
            title: '余额变动',
            key: 3,
            render: (text, record) => (
              <div>
                 {record.sms_price
                  ? <span>- {FormateNum(record.sms_price)}</span>
                  : <span>+ {FormateNum(record.total_fee)}</span>
                 }
              </div>
            )
          }, {
            title: '描述',
            key: 4,
            render: (text, record) => (
              <span>
                {record.remarks ? record.remarks : record.plan_name}
              </span>
            ),
          }];
        return (
            <div>
                <RangePicker onChange={this.onChange} style={{marginBottom: '20px'}}/>
                {
                  loading
                  ? <div style={style.spin}><Spin spinning={loading}/></div>
                  : this.renderTable(columns)
                }
            </div>
        )
    }
}

export default RecordView