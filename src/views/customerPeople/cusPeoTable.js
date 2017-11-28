import React from 'react'
import { Table, Button, Spin, Popconfirm } from 'antd'
import {FormateNum} from '../../help/formate'
const style={
  spin: {
    textAlign: 'center',
    marginBottom: '20px',
    padding:'30px 50px',
    margin: '20px 0'
  }
}

class CusPeoTable extends React.Component {
    renderTable (columns) {
      const tagsData = this.props.tagsData
      if (tagsData.length > 0) {
        return (
          <Table columns={columns}
                dataSource={tagsData}
                rowKey={record => record.id}
        />
        )
      } else {
        return (
          <div style={{width: '200px', margin: '20px auto'}}>暂无数据</div>
        )
      }
    }
    delTagitem (id) {
        this.props.delTag(id)
    }
    renderConds (conds_desc) {
      const data = []
      for(var i in conds_desc) {
       data.push(
         <div key={i}>
           <span>{i}: </span>&nbsp;&nbsp;
           <span>{conds_desc[i]}</span>
         </div>
       )
      }
      return data
    }
    render () {
        const loading = this.props.loading
        const columns = [{
          title: '人群名称',
          dataIndex: 'name',
          key: 'name'
        }, {
          title: '包含人数',
          key: 'customer_cnt',
          render: (txt, record) => (
            <span>{FormateNum(record.customer_cnt)}</span>
          )
        }, {
          title: '描述',
          key: 'action',
          render: (text, record) => {
            const conds_desc = record.conds_desc
            const conds = record.conds
            return (
              <div style={{width: '200px'}}>
                {
                  conds === ""
                  ? <span>文件上传</span>
                  : this.renderConds(conds_desc)
                }
              </div>
            )
           }
        }, {
          title: '创建时间',
          dataIndex: 'created_at',
          key: 'created_at',
        }, {
          title: '操作',
          key: 'caozuo',
          render: (text, record) => (
              <Popconfirm title="您确定删除这个人群吗?" onConfirm={this.delTagitem.bind(this, record.id)}>
                <Button>删除</Button>
              </Popconfirm>
          )
        }];
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                  {
                    loading
                    ? <div style={style.spin}><Spin spinning={loading}/></div>
                    : this.renderTable(columns)
                  }
                </div>
            </div>
        )
    }
}

export default CusPeoTable