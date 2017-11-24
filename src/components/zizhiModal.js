import React from 'react'
import {Modal, Button, Alert} from 'antd'
import {Link} from 'react-router-dom'
import createHistory from 'history/createHashHistory';
const history = createHistory()

class ZizhiModal extends React.Component {
  constructor () {
      super()
      this.state ={
          showModal: false
      }
  }
  componentWillReceiveProps (nextProps) {
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
  }
  handelClick = () => {
    history.push('/setsms')
    this.setState({
        showModal: false
    })
  }
  render () {
       return (
            <div>
                <Modal
                    title="系统提示"
                    visible={this.state.showModal}
                    footer={null}
                    closable={false}
                    >
                    <Alert message="请先上传您的营业执照和设置短信签名…" type="warning" showIcon />
                    <div style={{margin: '20px auto', width: '100px'}}>
                        <Button type="primary" onClick={this.handelClick}>去上传</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ZizhiModal
