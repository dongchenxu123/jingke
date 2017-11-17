import React from 'react'
import {Form, Input, Select, Button} from 'antd'
import PreView from './preView'
const FormItem = Form.Item;
const Option = Select.Option;
const data = {
    zhidaName: '立即查看'
}
class TempFormView extends React.Component {
    constructor () {
        super ()
        this.state={
            isDisable: false    //审核中  //通过
        }
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
        const { getFieldDecorator, getFieldsValue} = this.props.form;
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 14 },
        };
        const values = getFieldsValue()
        console.log(values)
        return (
            <div className="panel-body">
                <div className="col-md-8">
                    <h5 style={{marginBottom: '20px'}}>短信模板</h5>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            label="直达号"
                            {...formItemLayout}
                            >
                            {getFieldDecorator('zhidaName', {
                                rules: [{message: '直达号名称不能大于4!', max: 4 }],
                                initialValue: data.zhidaName
                            })(
                                <Select placeholder="请选择直达号链接">
                                    <Option value="立即查看">立即查看</Option>
                                    <Option value="立即参加">立即参加</Option>
                                    <Option value="立即报名">立即报名</Option>
                                    <Option value="立即抢购">立即抢购</Option>
                                    <Option value="立即领券">立即领券</Option>
                                    <Option value="立即预定">立即预定</Option>
                                    <Option value="点击领优惠">点击领优惠</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="链接"
                            >
                            {getFieldDecorator('zhidaUrl', {
                                rules: [
                                {message: '请选择直达号链接!' },
                                ],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="菜单一"
                            {...formItemLayout}
                            >
                            {getFieldDecorator('menuName1', {
                                rules: [{ required: true, message: '菜单名称不能超过4个字符!', max: 4 }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="链接"
                        {...formItemLayout}
                            >
                            {getFieldDecorator('menuUrl1', {
                                rules: [{ required: true, message: '请填写链接!'}],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="菜单二"
                            {...formItemLayout}
                            >
                            {getFieldDecorator('menuName2', {
                                rules: [{ message: '菜单名称不能超过4个字符!', max: 4 }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="链接"
                        {...formItemLayout}
                            >
                            {getFieldDecorator('menuUrl2', {
                                rules: [{ message: '请填写链接!'}],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="菜单三"
                            {...formItemLayout}
                            >
                            {getFieldDecorator('menuName3', {
                                rules: [{  message: '菜单名称不能超过4个字符!', max: 4 }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="链接"
                        {...formItemLayout}
                            >
                            {getFieldDecorator('menuUrl3', {
                                rules: [{ message: '请填写链接!'}],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            wrapperCol={{ span: 12, offset: 6 }}
                            >
                            <Button type="primary" htmlType="submit">保存</Button>
                        </FormItem>
                    </Form>
                </div>
                <div className="col-md-4">
                    <h5 style={{marginBottom: '20px'}}>效果预览</h5>
                    <div style={{position: 'absolute', top: 32, right: 20, width: '300px', height: '500px', border: '1px solid #eee'}} className='panel panel-default'>
                        <PreView menus={values}/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Form.create()(TempFormView)