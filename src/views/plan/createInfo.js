import React from 'react'
import {Alert, Icon, Button} from 'antd'
import {Link} from 'react-router-dom'
import {plan} from '../../help/linkUrl'
class CreateInfo extends React.Component {
    renderAlert () {
        const {user} = this.props
        if (user !== null) {
            if (user.sms_menu !== null) {
                if (user.sms_menu.status === '2') {
                    return (<Alert message='短信签名审核未通过！' type="error" showIcon />)
                }
                if (user.sms_menu.menu_status === '2') {
                    return (<Alert message='短信模板审核未通过！' type="error" showIcon />)
                }
            }
        }
       
    }
    render () {
        const {seltotal, recreate} = this.props
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                     {
                        this.renderAlert()
                     }
                     <div style={{textAlign: 'center', lineHeight: '30px', margin: '16px 0'}}>
                        <p><Icon type="check-circle-o" style={{color: '#a5cf53'}}/>&nbsp;&nbsp;创建成功！</p>
                        <p>
                           <span>已选人数 <span style={{color: '#ff0000', padding: '0 8px'}}>{seltotal}</span>人</span>
                           <span style={{paddingLeft: '16px'}}>预计发送短信 <span style={{color: '#ff0000', padding: '0 8px'}}>{seltotal}</span>条</span>
                        </p>
                        <p>
                            您的营销计划审核通过后，系统会自动在您的喜宝余额中扣除本次营销费用
                        </p>
                        <div>
                            <Link to={plan}><Button type="primary">返回计划列表</Button></Link>
                            <Button type="primary" onClick={recreate} style={{marginLeft: '16px'}}>再创建一个</Button>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default CreateInfo