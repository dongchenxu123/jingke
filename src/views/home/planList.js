import React from 'react'
import { Table, Icon, Popover, Button } from 'antd'
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

const columns = [{
  title: '计划标题',
  dataIndex: 'name',
  key: 'name',
  render: text => (<Popover placement="bottom" content={content} trigger="hover">
        <span>{text}</span>
      </Popover>),
}, {
  title: '预约发送时间',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '最新状态',
  key: 'action',
  render: (text, record) => (
    <div>
        <span>未通过</span>&nbsp;&nbsp;
        <Popover placement="bottom" content={content} trigger="hover">
            <Icon type="question-circle-o" />
        </Popover>
    </div>
    )
}, {
  title: '推送量',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'caozuo',
  render: (text, record) => (
      <Button.Group>
        <Button>查看详情</Button>
        <Button>删除</Button>
      </Button.Group>
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

class PlanListView extends React.Component {
    render () {
        return (
            <div className='panel panel-default'>
                <div className='panel-body'>
                    <h5 style={{marginBottom: '20px'}}>推动记录</h5>
                    <Table columns={columns}
                           dataSource={data}
                           rowKey={record => record.key}
                           />
                </div>
            </div>
        )
    }
}

export default PlanListView