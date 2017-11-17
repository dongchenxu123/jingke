import React from 'react'
import './App.css'
import { FormateNum } from '../help/formate'
import FeebtnView from './feeBtn'
import UserfeeMain from '../views/userfee/userfeeMain'
class UserFee extends React.Component {
    render () {
        return (
            <div className="userfee">
                <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px'}}>
                    <h5 style={{display: 'inline-block', padding: '15px 0'}}>账户余额</h5>
                    <div style={{lineHeight: '30px'}}>
                        <div style={{color: '#f3a01c',  display: 'inline-block'}}>
                            <span>￥</span>
                            <span style={{fontSize: '32px'}}>{FormateNum(5000)}</span>
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