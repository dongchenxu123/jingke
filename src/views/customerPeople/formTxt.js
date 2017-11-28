import React from 'react'
import {Form, Upload, Icon, Button, message, Input, Modal} from 'antd'

const FormItem = Form.Item
class FormTxtView extends React.Component {
    constructor () {
        super()
        this.state={
            total: 0
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const _this = this
        this.props.form.validateFields((err, values) => {
        if (!err) {
           _this.props.onSubmitTxt(values)
        }
      });
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
        };
        const _this = this
        const props = {
            name: 'file',
            action: '/customer?do=upload',
            // action: '/api/customer?do=upload&test=1',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                 if(info.file.response.msg) {
                      Modal.error({
                        title: '错误提示：',
                        content: `${info.file.response.msg}`,
                    });
                    return
                }
                if (info.file.response.code === 0) {
                    _this.setState({
                        total: info.file.response.res.total
                    })
                }
                }
                if (info.file.status === 'done') {
                message.success(`${info.file.name} 文件上传成功！`);
                } else if (info.file.status === 'error') {
                message.error(`${info.file.name} 文件上传失败.`);
                }
            },
        };
        // const formValues = getFieldsValue()
        let sendTotal = this.state.total
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="人群名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: '人群名称不能超过15个字符',
                            max: 15
                        }],
                    })(
                        <Input placeholder="人群名称" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="上传文件"
                    extra="请上传仅有一列手机号码的”.txt“格式的文件"
                    >
                    {getFieldDecorator('upload', {
                        rules: [
                        { required: true, message: '请先上传文件!' },
                        ],
                    })(
                        <Upload  {...props}>
                            <Button>
                                <Icon type="upload" /> 选择文件
                            </Button>
                        </Upload>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="提示："
                    >
                    <span>共上传了 <span style={{color: '#f00'}}>{sendTotal}</span> 个号码</span>
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 12, offset: 6 }}
                    >
                    <Button type="primary" htmlType="submit">保存</Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(FormTxtView)