import React from 'react'
import '../../components/App.css'
import PlanList from '../home/planList'
import PlanData from './planData'
import {Link} from 'react-router-dom'
import {Select, Input, DatePicker, Button, Icon  } from 'antd'
import {createSms} from '../../help/linkUrl'
const { RangePicker } = DatePicker
const Option = Select.Option;
const Search = Input.Search
class PlanMainview extends React.Component {
    handleChange = (value) => {

    }
    planName = (value) => {

    }
    onChangeTime = (date, dateString) => {

    }
    render () {
        console.log(this.props.data)
        return (
            <div className="plan">
              <div className="panel panel-default">
                    <div className="panel-heading" style={{backgroundColor: '#fff', height: '50px'}}>
                        <h5 style={{lineHeight: '30px'}}>执行概况</h5>
                    </div>
                    <PlanData />
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
                <PlanList />
            </div>
        )
    }
}

export default PlanMainview