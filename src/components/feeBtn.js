import React from 'react'
import {Button} from 'antd'
import request from '../util/request'
const reqObj = {
    recharge: `user?do=recharge`
}
function userRecharge(){
    let option={
        url: reqObj.recharge
    }
    return request(option)
}
console.log(userRecharge())
class FeebtnView extends React.Component {
    linktoRecharge = () => {
        userRecharge().then(data => {
            if (data.redirect_url) {
                location.href= data.redirect_url
            }
        })
    }
    render () {
        return (
            <Button style={{backgroundColor: '#f3a01c', color: '#fff', border: '1px solid #f3a01c', width: '150px'}}
                    size='large'
                    onClick={this.linktoRecharge}>
                    立即充值
            </Button>
        )
    }
}

export default FeebtnView