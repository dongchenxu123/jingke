import React, { Component } from 'react';
import './App.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom'
import DateView from '../views/home/dateView'
import PlanListView from '../views/home/planList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <DateView />
        <PlanListView />
      </div>
    );
  }
}

export default App;
