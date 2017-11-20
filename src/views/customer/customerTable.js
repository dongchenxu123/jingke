import React from 'react'
import { Table, Spin, Icon, Tooltip } from 'antd'
const style={
  spin: {
    textAlign: 'center',
    marginBottom: '20px',
    padding:'30px 50px',
    margin: '20px 0'
  }
}
const text = <span>在用户历史下单客单价基础上，对用户消费可承受范围的综合评估活跃度</span>
const hyText = <span>近60天用户下单次数</span>
const columns = [{
  title: '用户',
  dataIndex: 'fullname',
  key: 'fullname'
}, {
  title: 
      <div>
        <span>购买力</span>&nbsp;&nbsp;
        <Tooltip placement="bottom" title={text}>
          <Icon type="question-circle-o" />
        </Tooltip>
      </div>
  ,
  dataIndex: 'order_price',
  key: 'order_price'
  
}, {
  title:
      <div>
        <span>活跃度</span>&nbsp;&nbsp;
        <Tooltip placement="bottom" title={hyText}>
          <Icon type="question-circle-o" />
        </Tooltip>
      </div>
  ,
  dataIndex: 'order_cnt',
  key: 'order_cnt',
}, {
  title: '性别',
  key: 'action',
  render: (text, record) => (
    <span>
       {record.gendar=== "2" ? '女' : '男'}
    </span>
  ),
}, {
  title: '地域',
  dataIndex: 'province',
  key: 'province',
}];


class CustomerTable extends React.Component {
    renderTable = () => {
      const customerData = this.props.customerData
      if (customerData.length > 0) {
        return (
          <Table columns={columns} dataSource={customerData} rowKey={record => record.jd_user_id}/>
        )
      } else {
        return (
          <div style={{width: '200px', margin: '20px auto'}}>暂无数据</div>
        )
      }
    }
    render () {
        const customerData = this.props.customerData
        const loading = this.props.loading
        return (
            <div>
              {
                loading
                ? <div style={style.spin}><Spin spinning={loading}/></div>
                : this.renderTable()
              }
            </div>
        )
    }
}

export default CustomerTable