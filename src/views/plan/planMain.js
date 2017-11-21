import React from 'react'
import '../../components/App.css'
import PlanList from '../home/planList'
import PlanData from './planData'
import {Link} from 'react-router-dom'
import {Select, Input, DatePicker, Button, Icon, message } from 'antd'
import {createSms} from '../../help/linkUrl'
import request from '../../util/request'
const Obj = {
    tasksList: `market?do=get-tasks`,
    cancelPlan: `market?do=cancel-task`
 }
function tasksList () {
   let option={
        url: Obj.tasksList,
    }
    return request(option)
}
function cancelPlan (id) {
  let option={
        url: Obj.cancelPlan,
        method: 'post',
        data: {
            id: id
        }
    }
  return request(option)
}

const { RangePicker } = DatePicker
const Option = Select.Option;
const Search = Input.Search
class PlanMainview extends React.Component {
    constructor () {
        super()
        this.state={
        tasksList: [],
        curr_month_cnt: 0,
        curr_week_cnt: 0,
        waiting_cnt: 0,
        loading: true
      }
    }
    componentDidMount () {
        tasksList().then(data => {
        this.setState({
            tasksList: data.data,
            curr_month_cnt: data.summary.curr_month_cnt,
            curr_week_cnt: data.summary.curr_week_cnt,
            waiting_cnt: data.summary.waiting_cnt,
            loading: false
           })
        })
    }
    handelCancel = (id) => {
     cancelPlan(id).then(data => {
       if(data !== null) {
        message.success('取消成功！')
       } else {
        message.error('计划不存在或已不能取消!')
       }
     })
    }
    handleChange = (value) => {

    }
    planName = (value) => {

    }
    onChangeTime = (date, dateString) => {

    }
    render () {
        const {curr_month_cnt, curr_week_cnt, waiting_cnt} = this.state
        return (
            <div className="plan">
              <div className="panel panel-default">
                    <div className="panel-heading" style={{backgroundColor: '#fff', height: '50px'}}>
                        <h5 style={{lineHeight: '30px'}}>执行概况</h5>
                    </div>
                    <PlanData curr_month_cnt={curr_month_cnt}
                              curr_week_cnt={curr_week_cnt}
                              waiting_cnt={waiting_cnt}/>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" style={{backgroundColor: '#fff', height: '50px', overflow: 'hidden', display: 'flex'}}>
                        <h5 style={{lineHeight: '30px'}}>短信营销计划</h5>
                        <Link to={createSms} style={{marginLeft: '15px'}}>
                            <Button type='primary'>
                                <Icon type="plus-circle" />
                                <span style={{fontSize: '16px'}}>创建短信营销计划</span>
                            </Button>
                        </Link>
                    </div>
                    <div className="panel-body">
                        <Select defaultValue="状态不限"
                                style={{ width: 120 }}
                                onChange={this.handleChange}
                               > 
                            <Option value="状态不限">状态不限</Option>
                            <Option value="即将执行">即将执行</Option>
                            <Option value="审核中" >审核中</Option>
                            <Option value="未通过">未通过</Option>
                            <Option value="已完成">已完成</Option>
                        </Select>
                        <Search
                            placeholder="计划标题"
                            onSearch={this.planName}
                            style={{margin: '0px 10px', width: 200}}
                        />
                        <RangePicker onChange={this.onChangeTime} />
                    </div>
                </div>
                <PlanList tasksList={this.state.tasksList}
                          loading={this.state.loading}
                          handelCancel={this.handelCancel}/>
            </div>
        )
    }
}

export default PlanMainview