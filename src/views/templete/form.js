import React from 'react'
import {Form, Input, Select, Button, Spin} from 'antd'
import PreView from './preView'


const FormItem = Form.Item;
const Option = Select.Option;
const style={
  spin: {
    textAlign: 'center',
    marginBottom: '20px',
    padding:'30px 50px',
    margin: '20px 0'
  }
}
class TempFormView extends React.Component {
    constructor () {
        super ()
        this.state={
            isDisable: false,    //审核中  //通过
            zhidaName: '',
            zhidaUrl: '',
            menuName1: '',
            menuName2: '',
            menuName3: '',
            menuUrl1: '',
            menuUrl2: '',
            menuUrl3: '',
            showForm: true
        }
    }
    componentDidMount () {
        const _this = this
        const menus = this.props.menu
        if (menus !== null) {
            let zhidaMenu = []
            let serviceMenu = []
            if (menus !== null) {
                this.setState({
                    showForm: false
                })
                for (var j = 0; j < menus.length; j++) {
                    if (menus[j].type === 1) {
                        serviceMenu.push(menus[j])
                    } else {
                        zhidaMenu.push(menus[j])
                    }
                }
            }
            if (zhidaMenu.length > 0) {
                this.setState({
                    zhidaName: zhidaMenu[0].name,
                    zhidaUrl: zhidaMenu[0].url
                })
            }
            if (serviceMenu.length > 0) {
                for (var m = 0; m < serviceMenu.length; m++) {
                this.setState({
                    ['menuName' + (m + 1)]: serviceMenu[m].name,
                    ['menuUrl' + (m + 1)]: serviceMenu[m].url
                })
                }
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const _this = this
        this.props.form.validateFields((err, values) => {
        if (!err) {
            _this.props.submitMenu(values)
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
        if (values.menuName1 === '') {
            values.menuName1 = this.state.menuName1
        }
        if (values.menuName2 === '') {
            values.menuName2 = this.state.menuName2
        }
        if (values.menuName3 === '') {
            values.menuName3 = this.state.menuName3
        }
        if (values.menuUrl1 === '') {
            values.menuUrl1 = this.state.menuUrl1
        }
        if (values.menuUrl2 === '') {
            values.menuUrl2 = this.state.menuUrl2
        }
        if (values.menuUrl3 === '') {
            values.menuUrl3 = this.state.menuUrl3
        }
        const showForm = this.state.showForm
        return (
            <div className="panel-body">
                <div className="col-md-8">
                    <h5 style={{marginBottom: '20px'}}>短信模板</h5>
                    {
                        showForm
                        ? <div style={style.spin}><Spin spinning={showForm}/></div>
                        : <Form onSubmit={this.handleSubmit}>
                            <FormItem
                                label="直达号"
                                {...formItemLayout}
                                >
                                {getFieldDecorator('zhidaName', {
                                    rules: [{message: '直达号名称不能大于4!', max: 4 }],
                                    initialValue: this.state.zhidaName
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
                                    initialValue: this.state.zhidaUrl
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
                                    initialValue: this.state.menuName1
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
                                    initialValue: this.state.menuUrl1
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
                                    initialValue: this.state.menuName2
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
                                    initialValue: this.state.menuUrl2
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem
                                label="菜单三"
                                {...formItemLayout}
                                >
                                {getFieldDecorator('menuName3', {
                                    rules: [{ message: '菜单名称不能超过4个字符!', max: 4 }],
                                    initialValue: this.state.menuName3
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
                                    initialValue: this.state.menuUrl3
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem
                                wrapperCol={{ span: 15, offset: 6 }}
                                >
                                <Button type="primary" htmlType="submit">保存</Button>
                                
                            </FormItem>
                        </Form>
                    }
                </div>
                {
                    showForm
                    ? null
                    : <div className="col-md-4">
                        <h5 style={{marginBottom: '20px'}}>效果预览</h5>
                        <div style={{position: 'absolute', top: 32, right: 20, width: '300px', height: '500px', border: '1px solid #eee'}} className='panel panel-default'>
                            <PreView menus={values} />
                        </div>
                     </div>
                }
            </div>
        )
    }
}

export default Form.create()(TempFormView)