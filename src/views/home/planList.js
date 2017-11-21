import React from 'react'
import { Table, Icon, Popover, Button, Spin, Popconfirm } from 'antd'
import {FormateNum} from '../../help/formate'
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const style={
  spin: {
    textAlign: 'center',
    marginBottom: '20px',
    padding:'30px 50px',
    margin: '20px 0'
  }
}

class PlanListView extends React.Component {
    renderTable (tasksList, columns) {
      if (tasksList.length > 0) {
        return (
          <Table columns={columns}
                dataSource={tasksList}
                rowKey={record => record.id}
        />
        )
      } else {
        return (
          <div style={{width: '200px', margin: '20px auto'}}>暂无数据</div>
        )
      }
    }
    confirm (id) {
        this.props.handelCancel(id)
    }
    render () {
        const {tasksList, loading} = this.props
        const columns = [{
          title: '计划标题',
          dataIndex: 'plan_name',
          key: 'plan_name'
        }, {
          title: '预约发送时间',
          dataIndex: 'send_time',
          key: 'send_time',
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
          render: (text, record) => (
            <span>{FormateNum(record.req_total_num)}</span>
          ),
          key: 'req_total_num',
        }, {
          title: '触达量',
          render: (text, record) => (
            <span>{FormateNum(record.rpt_succ_num)}</span>
          ),
          key: 'rpt_succ_num',
        }, 
        {
          title: '点击量',
          render: (text, record) => (
            <span>{FormateNum(record.rpt_click_num)}</span>
          ),
          key: 'rpt_click_num',
        }, 
        {
          title: '操作',
          key: 'caozuo',
          render: (text, record) => (
              <div style={{display: 'flex'}}>
                <Button>查看详情</Button>
                <Popconfirm title="您确定取消这个计划吗?" onConfirm={this.confirm.bind(this, record.id)}>
                  <Button>取消计划</Button>
                </Popconfirm>
              </div>
          )
        }];
        return (
            <div className='panel panel-default'>
                <div className='panel-body'>
                    <h5 style={{marginBottom: '20px'}}>推动记录</h5>
                    {
                      loading
                      ? <div style={style.spin}><Spin spinning={loading}/></div>
                      : this.renderTable(tasksList, columns)
                    }
                </div>
            </div>
        )
    }
}

export default PlanListView