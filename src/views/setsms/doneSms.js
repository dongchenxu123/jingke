import React from 'react'
import {Button} from 'antd'
class DoneSms extends React.Component {
    render () {
        const {telephone, sms_sign, company_license, handleClick} = this.props
        return (
            <div>
                <div className="panel-heading" style={{padding: '20px 15px'}}>
                    <span>短信签名</span>
                    <span style={{marginLeft: '15px'}}>{sms_sign}</span>
                </div>
                <div className="panel-heading" style={{padding: '20px 15px'}}>
                    <span>营业执照</span>
                    <img 
                    style={{marginLeft: '15px', width: '150px', height: '150px'}} 
                    src={company_license} alt=''/>
                </div>
                <div className="panel-heading" style={{padding: '20px 15px'}}>
                    <span>手机号</span>
                    <span style={{marginLeft: '15px'}}>{telephone}</span>
                    {/* <span style={{color: '#5a76d5', float: 'right'}}>修改</span> */}
                </div>
                <div style={{width: '200px', margin: '20px auto'}}>
                    <Button type="primary" onClick={handleClick}>编辑</Button>
                </div>
            </div>
        )
    }
}

export default DoneSms