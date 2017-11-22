import React from 'react'
import { Tabs } from 'antd'
import RecordView from './record'
import request from '../../util/request'
const TabPane = Tabs.TabPane
const reqObj = {
    trades: `user?do=get-trades`,
    cost : `user?do=get-cost`
}
function userTrades(){
    let option={
        url: reqObj.trades
    }
    return request(option)
}
function userCost(){
    let option={
        url: reqObj.cost
    }
    return request(option)
}

class UserfeeMain extends React.Component {
    constructor () {
        super ()
        this.state ={
            trades: [],
            cost: [],
            loading: true
        }
    }
    componentDidMount () {
        userTrades().then(data => {
            this.setState({
                trades: data.data,
                loading: false
            })
        })
        userCost().then(data => {
            this.setState({
                cost: data.data,
                loading: false
            })
        })
    }
    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="消费记录" key="1">
                            <RecordView data={this.state.cost} loading={this.state.loading}/>
                        </TabPane>
                        <TabPane tab="充值记录" key="2">
                            <RecordView data={this.state.trades} loading={this.state.loading}/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default UserfeeMain