import React from 'react'
import {Form, Input, DatePicker, Button} from 'antd'
// import {Link} from 'react-router-dom'
import {SelectPeople} from '../../help/linkUrl'
import createHistory from 'history/createHashHistory';
const history = createHistory()
const FormItem = Form.Item
const { TextArea } = Input
class FormView extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const _this = this
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            _this.props.SubmitForm(values)
            history.push(SelectPeople)
        }
        });
    }
    checkSms (fontNum, rule, value, callback) {
        const form = this.props.form;
        if (value && value.length > fontNum) {
        callback('字符已经超出规定范围!');
        } else {
        callback();
        }
    }
    disabledDate = (current) => {
        return current && current.valueOf() < (new Date().getTime()+(2*3600*1000*24))
    }
    render () {
        const { getFieldDecorator, getFieldsValue } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 14 }
        }
        const config = {
        rules: [{ type: 'object', required: true, message: '请选择发送日期!' }],
        };
        const user = this.props.user
        let fontNum = 70
        const totalNum = 62    //一共70个字符减退订回“T”，再减签名左右符号
        if (user !== null) {
            fontNum = totalNum-this.props.user.sms_sign.length
        }
        const val = getFieldsValue()
        let smsNum = 0
        if (val.sms) {
            smsNum = val.sms.length
        }
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="col-md-8">
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem
                                label="计划标题"
                                {...formItemLayout}
                                >
                                {getFieldDecorator('planTitle', {
                                    rules: [{ required: true, message: '计划标题不能超过15个字符！', max: 15 }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="发送时间"
                                extra="仅可以选择3日之后的时间，可以精确到“时”"
                                >
                                {getFieldDecorator('sendTime', config)(
                                    <DatePicker disabledDate={this.disabledDate}/>
                                )}
                            </FormItem>
                            <FormItem
                                label="短信内容"
                                {...formItemLayout}
                                extra={<div>
                                        <span>{smsNum}</span> /
                                        <span>{fontNum}</span>
                                        <span style={{paddingLeft: '10px'}}>系统自动在末尾添加“退订回“T””</span>
                                      </div>}
                                >
                                {getFieldDecorator('sms', {
                                    rules: [{ required: true, message: '请填写短信内容！'},
                                    {
                                        validator: this.checkSms.bind(this, fontNum)
                                    }],
                                })(
                                <TextArea rows={4}/>
                                )}
                            </FormItem>
                            <FormItem
                                wrapperCol={{ span: 8, offset: 4 }}
                                >
                                <Button type="primary" htmlType="submit" style={{width: '150px'}}>
                                    下一步
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
const WrappedApp = Form.create()(FormView)
export default WrappedApp