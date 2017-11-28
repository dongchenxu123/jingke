import React from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import RecordView from './record'
import request from '../../util/request'
import FeebtnView from '../../components/feeBtn'

import { FormateNum } from '../../help/formate'

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
        const { user, userLoading } = this.props
        console.log(user)
        let sms_balance = 0
        if (user !== null) {
            sms_balance = user.sms_balance
        }
        return (
            <div className="userfee">
            <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px'}}>
                <h5 style={{display: 'inline-block', padding: '15px 0'}}>短信余额 (条)</h5>
                <div style={{lineHeight: '30px'}}>
                    <div style={{display: 'inline-block'}}>
                        <span style={{fontSize: '32px'}}>{userLoading ? 0 :FormateNum(sms_balance)}</span>
                    </div>
                    <div style={{marginRight: '200px', float: 'right'}}>
                            <FeebtnView />
                    </div>
                </div>
            </div>
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
        </div>
            
        )
    }
}

function mapToState(state){
    const user = state.user;
    return { 
        user: user.user,
        userLoading: state.loading.effects['user/getUser']
    }
}
export default connect(mapToState)(UserfeeMain)