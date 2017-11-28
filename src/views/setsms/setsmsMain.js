import React from 'react'
import { connect } from 'react-redux'
import { Spin, message, Alert} from 'antd'
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
const status={0: '待审核',1: '审核通过',2: '审核拒绝', 3: '已提交,审核中'} 
const alertType = {0: 'info',1: 'success',2: 'error', 3: 'info'}
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
        // let show = true
        userInfo().then(data => {
            // if (data.user.company_license !== "" && data.user.sms_sign !== "" && data.user.telephone !== "") {
            //     show = false
            // }
            this.setState({
                company_license: data.user.company_license,
                sms_sign: data.user.sms_sign,
                telephone: data.user.telephone,
                loading: false,
                showForm: false
            })
        })
    }
    componentDidMount () {
        const user = this.props.user
        let show = true
        if (user !== null) {
            if (user.company_license !== "" && user.sms_sign !== "" && user.telephone !== "") {
                show = false
            }
            this.setState({
                company_license: user.company_license,
                sms_sign: user.sms_sign,
                telephone: user.telephone,
                loading: false,
                showForm: show
            })
        }
        
        // this.loadingUserInfo()
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
            // _this.loadingUserInfo()
             _this.props.dispatch({
                type:'user/getUser'
             })
           } else {
             message.error('创建失败！')
           }
       })
    }
    renderContent () {
        const {showForm, company_license, sms_sign, telephone} = this.state
        const user = this.props.user
        let signStatus = ""
        if (user !== null) {
            if (user.sms_menu !== null) {
                signStatus = user.sms_menu.status
            }
        }
        const content =(
            <div>
                <span>短信签名:</span>
                <span style={{paddingLeft: '8px'}}>{status[signStatus]}</span>
            </div>
        ) 
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
                <div>
                    {
                        signStatus
                        ? <Alert message={content} type={alertType[signStatus]} showIcon style={{marginBottom: '20px'}}/>
                        : null
                    }
                    <DoneSms company_license={company_license}
                            sms_sign={sms_sign}
                            telephone={telephone}
                            handleClick={this.handleClick}/>
                </div>
            )
        }
    }
    render () {
        const {loading } = this.props
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

function mapToState(state) {
    const user = state.user
    return {
        user: user.user,
        shop: user.shop,
        loading: state.loading.effects['user/getUser']
    }
}

export default connect(mapToState)(SetsmsMain)