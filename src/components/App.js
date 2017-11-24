import React, { Component } from 'react';
import './App.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom'
import DateView from '../views/home/dateView'
import PlanListView from '../views/home/planList'
import request from '../util/request'
const Obj = {
    tasksList: `market?do=get-tasks&skip=0&limit=10`,
    cancelPlan: `market?do=cancel-task`,
    getStats:  `market?do=get-stats`
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
function getStats () {
  let option={
        url: Obj.getStats,
    }
    return request(option)
}
class App extends Component {
  constructor () {
    super()
    this.state={
      tasksList: [],
      loading: true,
      curr_month: {},
      last_month: {},
      today: {}
    }
  }
  componentDidMount () {
    tasksList().then(data => {
      this.setState({
        tasksList: data.data,
        loading: false
      })
    })
    getStats().then(data => {
      this.setState({
        curr_month: data.curr_month,
        last_month: data.last_month,
        today: data.today
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
  render() {
    const {curr_month, last_month, today} = this.state
    return (
      <div className="App">
        <DateView curr_month={curr_month}
                  last_month={last_month}
                  today={today}/>
        <div className='panel panel-default'>
            <div className='panel-body'>
                <h5 style={{marginBottom: '20px'}}>近期计划（TOP10）</h5>
                <PlanListView tasksList={this.state.tasksList}
                      loading={this.state.loading}
                      handelCancel={this.handelCancel}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App