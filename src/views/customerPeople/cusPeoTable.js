import React from 'react'
import { Table, Popover, Button } from 'antd'
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)
const columns = [{
  title: '人群名称',
  dataIndex: 'name',
  key: 'name',
  render: (text, record) => (
    <div>
       <div style={{paddingBottom: '10px'}}>{text}</div>
       <div>{text}</div>
    </div>
    ),
}, {
  title: '包含人数',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '描述',
  key: 'action',
  render: (text, record) => (
    <div style={{width: '200px'}}>
        <Popover placement="bottom" content={content} trigger="hover">
            <span style={{cursor: 'pointer'}}>描述</span>
        </Popover>
    </div>
    )
}, {
  title: '创建时间',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'caozuo',
  render: (text, record) => (
      <Button>删除</Button>
  )
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
class CusPeoTable extends React.Component {
    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                     <Table columns={columns}
                           dataSource={data}
                           rowKey={record => record.key}
                    />
                </div>
            </div>
        )
    }
}

export default CusPeoTable