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
function tasksList (task_status, planName, start_date, end_date) {
    let option={
        url: Obj.tasksList,
        params: {
          task_status: task_status,
          q: planName,
          start_date: start_date,
          end_date: end_date
       }
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
        loading: true,
        task_status: 0,
        planName: '',
        start_date: '',
        end_date: ''
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
        const _this = this
        this.setState({
            task_status: value
        })
        const {planName,start_date, end_date} = this.state
        tasksList (value, planName, start_date, end_date).then(data => {
            _this.setState({
                tasksList: data.data
            })
        })
    }
    planName = (value) => {
        this.setState({
            planName: value
        })
        const _this = this
        const { task_status , start_date, end_date} = this.state
        tasksList (task_status, value, start_date, end_date).then(data => {
            _this.setState({
                tasksList: data.data
            })
        })
    }
    onChangeTime = (date, dateString) => {
      console.log(date, dateString)
      const _this = this
      const {planName, task_status} = this.state
      if (dateString.length > 0) {
         this.setState({
             start_date: dateString[0],
             end_date: dateString[1]
         })
         tasksList (task_status, planName,dateString[0],dateString[1]).then(data => {
            _this.setState({
                tasksList: data.data
            })
        })
      }
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
                            <Option value="0">状态不限</Option>
                            <Option value="10" >审核中</Option>
                            <Option value="12">未通过</Option>
                            <Option value="20">即将执行</Option>
                            <Option value="21">已完成</Option>
                            <Option value="22">发送失败</Option>
                            <Option value="23">已取消</Option>
                            <Option value="24">发送中</Option>
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