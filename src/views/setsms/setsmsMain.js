import React from 'react'
import {Button, Spin, message} from 'antd'
import SetsmsForm from './setsmsForm'
import request from '../../util/request'
import DoneSms from './doneSms'
const Obj = {
    userInfo: `user?do=get-shop-info`,
    getCode: `user?do=send-sms-code`,
    setSms: `user?do=set-sms-sign`
}
const style={
  spin: {
    textAlign: 'center',
    marginBottom: '20px',
    padding:'30px 50px',
    margin: '20px 0'
  }
}
function userInfo(){
    let option={
        url: Obj.userInfo
    }
    return request(option)
}

function getCode (tel) {
    let option={
        url: Obj.getCode,
        method: 'post',
        data: {
            telephone: tel
        }
    }
    return request(option)
}
function setSmsVal (value) {
    let license_pic = ''
    if (value.zhizhao.file) {
        license_pic = value.zhizhao.file.response.res.src
    } else {
        license_pic = value.zhizhao
    }
    let option={
        url: Obj.setSms,
        method: 'post',
        data: {
            telephone: value.tel,
            license_pic: license_pic,
            code: value.code,
            sms_sign: value.sign
        }
    }
    return request(option)
}
class SetsmsMain extends React.Component {
    constructor() {
        super()
        this.state={
            company_license: '',
            sms_sign: '',
            telephone: '',
            loading: true,
            showForm: true
        }
    }
    loadingUserInfo () {
        userInfo().then(data => {
            if (data.user.company_license !== "" && data.user.sms_sign !== "" && data.user.telephone !== "") {
                this.setState({
                    showForm: false
                })
            }
            this.setState({
                company_license: data.user.company_license,
                sms_sign: data.user.sms_sign,
                telephone: data.user.telephone,
                loading: false
            })
        })
    }
    componentDidMount () {
        this.loadingUserInfo()
    }
    handleClick = () => {
        this.setState({
            showForm: true
        })
    }
    getCodenum = (tel) => {
        getCode(tel).then(data => {
            if (data <= 0) {
              message.error('发送的手机号码不匹配！')
            }
        })
    }
    hanelSubmit = (values) => {
       const _this = this
       setSmsVal(values).then(data => {
           if (data === "OK") {
             message.success('创建成功！')
             _this.setState({
                 showForm: false
             })
             _this.loadingUserInfo()
           } else {
             message.error('创建失败！')
           }
       })
    }
    renderContent () {
        const {showForm, company_license, sms_sign, telephone} = this.state
        if (showForm) {
            return (
                <SetsmsForm company_license={company_license}
                            sms_sign={sms_sign}
                            telephone={telephone}
                            getCodenum={this.getCodenum}
                            hanelSubmit={this.hanelSubmit}/>
            )
        } else {
             return (
                <DoneSms company_license={company_license}
                         sms_sign={sms_sign}
                         telephone={telephone}
                         handleClick={this.handleClick}/>
            )
        }
    }
    render () {
        const loading= this.state.loading
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {  loading
                       ? <div style={style.spin}><Spin spinning={loading}/></div>
                       : this.renderContent()
                    }
                </div>
            </div>
        )
    }
}

export default SetsmsMain