import React from 'react'
import {Table, Button} from 'antd'
import {Link} from 'react-router-dom'
import {finish} from '../../help/linkUrl'
const columns = [{
  title: '人群名称',
  dataIndex: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '包含人数',
  dataIndex: 'age',
}, {
  title: '描述',
  dataIndex: 'address',
},{
  title: '创建时间',
  dataIndex: 'date',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  date: '2017-15-9'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  date: '2017-15-9'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  date: '2017-15-9'
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
  date: '2017-15-9'
}];
class PeopleTable extends React.Component {
    constructor () {
        super()
        this.state ={
            selectedRowKeys: []
        }
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    render () {
        const { loading, selectedRowKeys } = this.state
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} rowKey={record => record.key}/>
                    <div style={{width: '200px', margin: '20px auto'}}>
                        <Link to={finish}>
                            <Button type="primary" style={{width: '150px'}}>提交</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PeopleTable