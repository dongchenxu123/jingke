import React from 'react'
import { DatePicker, Table, Spin  } from 'antd'
const { RangePicker } = DatePicker;
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions
      </a>
    </span>
  ),
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];
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
        console.log(date, dateString);
    }
    renderTable = () => {
       const data = this.props.data
       if (data.length > 0) {
          return (
            <Table columns={columns} dataSource={data} rowKey={record => record.key}/>
          )
       } else {
         return (
           <div style={{width: '200px', margin: '20px auto'}}>暂无数据</div>
         )
       }
    }
    render () {
        const loading = this.props.loading
        return (
            <div>
                <RangePicker onChange={this.onChange} style={{marginBottom: '20px'}}/>
                {
                  loading
                  ? <div style={style.spin}><Spin spinning={loading}/></div>
                  : this.renderTable()
                }
            </div>
        )
    }
}

export default RecordView