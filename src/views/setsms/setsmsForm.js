import React from 'react'
import {Form, Icon, Input, Button, Modal, Upload} from 'antd'
import './upload.css'
const FormItem = Form.Item;
let Timer = null
class SetsmsForm extends React.Component {
    constructor () {
        super()
        this.state ={
            cmsloading: false,
            btnNumber: 60
        }
    }
    handleGetSMSCode = (e) => {
    e.preventDefault()
    const self = this
    const values = this.props.form.getFieldsValue()
    if (!values.tel) {
      Modal.error({
        title: '提示',
        content: '请填写电话号码'
      })
      return
    }
    this.setState({
      cmsloading: true
    })
    setTimeout(function () {
      self.setState({
        cmsloading: false
      })
    }, 60000)
    this.renderGetCodeBtnTxt()
  }
    renderGetCodeBtnTxt = () => {
    const self = this
    Timer = setInterval(() => {
      if (self.state.btnNumber === 0) {
        clearInterval(Timer)
        self.setState({
          btnNumber: 60
        })
        return
      }
      self.setState({
        btnNumber: self.state.btnNumber - 1
      })
    }, 1000)
  }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
    }
    render () {
        const { getFieldDecorator, getFieldsValue } = this.props.form;
        const formItemLayout = {
             labelCol:{span: 4 },
             wrapperCol:{ span: 8 }
        }
        // const values = getFieldsValue()
        // if (values) {
        //     const imageUrl = 
        // }
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    label="短信签名"
                    {...formItemLayout}
                    >
                    {getFieldDecorator('sign', {
                        rules: [{ required: true, message: '短信签名不能超过10个字符!', max: 10 }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    label="上传营业执照"
                    {...formItemLayout}
                    >
                    {getFieldDecorator('zhizhao', {
                        rules: [{ required: true, message: '请上传营业执照!'}],
                    })(
                         <Upload
                            className="avatar-uploader"
                            name="avatar"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                        >
                           
                                <Icon type="plus" className="avatar-uploader-trigger" />
                        </Upload>
                    )}
                </FormItem>
                <FormItem
                    label="手机号"
                    {...formItemLayout}
                    >
                    {getFieldDecorator('tel', {
                        rules: [{ required: true, message: '请填写手机号！' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    label="短信验证码"
                    {...formItemLayout}
                    >
                    {getFieldDecorator('code', {
                        rules: [{ required: true, message: '请填写短信验证码！' }],
                    })(
                        <div>
                        <Input style={{width: '150px'}}/>
                        <Button
                        type='primary'
                        loading={this.state.cmsloading}
                        style={{height: '28px',borderBottomLeftRadius: 0, borderTopLeftRadius: 0, position: 'relative', top: '-1px', left: '-4px'}}
                        onClick={this.handleGetSMSCode}
                        >{this.state.cmsloading ? <span>&nbsp; {this.state.btnNumber}</span> : '获取验证码'}</Button>
                        </div>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 8, offset: 4 }}
                    >
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(SetsmsForm)
