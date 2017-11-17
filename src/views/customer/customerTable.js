import React from 'react'
import { Table } from 'antd'
const columns = [{
  title: '用户',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '购买力',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '活跃度',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '性别',
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
}, {
  title: '地域',
  dataIndex: 'source',
  key: 'source',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  source: 'pc'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  source: 'mb'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  source: 'pc'
}];
class CustomerTable extends React.Component {
    render () {
        return (
            <Table columns={columns} dataSource={data} rowKey={record => record.key}/>
        )
    }
}

export default CustomerTable