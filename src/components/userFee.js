import React from 'react'
import './App.css'
import { FormateNum } from '../help/formate'
import FeebtnView from './feeBtn'
import UserfeeMain from '../views/userfee/userfeeMain'
class UserFee extends React.Component {
    render () {
        const user = this.props.data.user
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
                            <span style={{fontSize: '32px'}}>{FormateNum(sms_balance)}</span>
                        </div>
                        <div style={{marginRight: '200px', float: 'right'}}>
                            <FeebtnView />
                        </div>
                    </div>
                </div>
                <UserfeeMain />
            </div>
        )
    }
}

export default UserFee