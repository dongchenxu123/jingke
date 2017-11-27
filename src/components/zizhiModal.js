import React from 'react'
import {Modal, Button, Alert} from 'antd'

import createHistory from 'history/createHashHistory';
import {Link} from 'react-router-dom'
const history = createHistory()

class ZizhiModal extends React.Component {
  constructor () {
      super()
      this.state ={
          showModal: false
      }
  }
  /*componentWillReceiveProps (nextProps) {
    const {company_license, sms_sign} = nextProps
    let isShow = false
    if (!company_license && !sms_sign) {
        isShow = true
    }
    const pathName = window.location.hash.replace('#', '')
    if (pathName === '/setsms') {
        isShow = false
    }
    this.setState({
        showModal: isShow
    })
  }*/
  handelClick = () => {
    this.setState({
        showModal: false
    })
  }
  render () {
        const { company_license, pathName } = this.props;
        let hasLicense = false;  
        if (company_license && company_license.length > 0) {
            hasLicense = true
        }
        if (pathName === '/setsms') {
            hasLicense = true;
        }
        console.log(this.props)
       return (
            <Modal
                title="系统提示"
                visible={!hasLicense}
                footer={null}
                closable={false}
                >
                <Alert message="请先上传您的营业执照和设置短信签名…" type="warning" showIcon />
                <div style={{margin: '20px auto', width: '100px'}}>
                    <Link to={'/setsms'}><Button type="primary" onClick={this.handelClick}>去上传</Button></Link>
                </div>
            </Modal>
        )
    }
}

export default ZizhiModal
