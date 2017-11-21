import React, { Component } from 'react';
import './App.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom'
import DateView from '../views/home/dateView'
import PlanListView from '../views/home/planList'
import request from '../util/request'
const Obj = {
    tasksList: `market?do=get-tasks&skip=0&limit=10`,
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
class App extends Component {
  constructor () {
    super()
    this.state={
      tasksList: [],
      loading: true
    }
  }
  componentDidMount () {
    tasksList().then(data => {
      this.setState({
        tasksList: data.data,
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
  render() {
    return (
      <div className="App">
        <DateView />
        <PlanListView tasksList={this.state.tasksList}
                      loading={this.state.loading}
                      handelCancel={this.handelCancel}/>
      </div>
    );
  }
}

export default App;
