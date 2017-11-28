import React from 'react'
import {Table, Button, Spin, Alert} from 'antd'
import {Link} from 'react-router-dom'
// import {finish} from '../../help/linkUrl'
import {FormateNum} from '../../help/formate'
const style={
  spin: {
    textAlign: 'center',
    marginBottom: '20px',
    padding:'30px 50px',
    margin: '20px 0'
  }
}


class PeopleTable extends React.Component {
    constructor () {
        super()
        this.state ={
            selectedRowKeys: []
        }
    }
    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
        this.props.selectTags(selectedRowKeys)
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
    submitTags (selectedRowKeys) {
        this.props.createPlan(selectedRowKeys)
    }
    renderTable (columns) {
      const {tagsData, seltotal, showTotal} = this.props
      const { selectedRowKeys } = this.state
      const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange
      };
      const selectTal = (
            <div>
                已选择人群共计
                {
                    showTotal
                    ? <Spin spinning={showTotal} size='small' style={{margin: '0 8px'}}/>
                    : <span style={{color: '#ff0000', padding: '0 8px'}}>{FormateNum(seltotal)}</span>
                }
                人
            </div>
        )
      if (tagsData.length > 0) {
        return (
        <div>
            <Alert message={selectTal} type="info"  style={{marginBottom: '8px'}}/>
            <Table columns={columns}
                   dataSource={tagsData}
                   rowKey={record => record.id}
                   pagination={false}
                   rowSelection={rowSelection}
            />
            <div style={{width: '200px', margin: '20px auto'}}>
                <Button type="primary"
                        style={{width: '150px'}}
                        disabled={!selectedRowKeys.length}
                        onClick={this.submitTags.bind(this, selectedRowKeys)}>提交</Button>
            </div>
        </div>
        )
      } else {
        return (
          <div style={{width: '200px', margin: '20px auto'}}>
              暂无数据 <Link to='/createPeoTags'>去添加</Link>
           </div>
        )
      }
    }
    render () {
        const {loading} = this.props
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

export default PeopleTable