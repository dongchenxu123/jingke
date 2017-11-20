import React from 'react'
import {Form, Input, DatePicker, Button} from 'antd'
import {Link} from 'react-router-dom'
import {SelectPeople} from '../../help/linkUrl'
const FormItem = Form.Item
const { TextArea } = Input
class FormView extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
    }
    checkSms = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('sms')) {
        callback('Two passwords that you enter is inconsistent!');
        } else {
        callback();
        }
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 14 }
        }
        const config = {
        rules: [{ type: 'object', required: true, message: '请选择发送日期!' }],
        };
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="col-md-8">
                        <Form onSubmit={this.handleSubmit}>
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
                                help="仅可以选择3日之后的时间，可以精确到“时”"
                                >
                                {getFieldDecorator('date-picker', config)(
                                    <DatePicker />
                                )}
                            </FormItem>
                            <FormItem
                                label="短信内容"
                               {...formItemLayout}
                                >
                                {getFieldDecorator('sms', {
                                    rules: [{ required: true, message: '请填写短信内容！'},
                                    
                                    {
                                        validator: this.checkSms
                                    }],
                                })(
                                <TextArea rows={4}/>
                                )}
                            </FormItem>
                            <FormItem
                                wrapperCol={{ span: 8, offset: 4 }}
                                >
                                <Link to={SelectPeople}>
                                    <Button type="primary" htmlType="submit" style={{width: '150px'}}>
                                        下一步
                                    </Button>
                                </Link>
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