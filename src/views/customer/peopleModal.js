import React from 'react'
import { Modal, Form, Input, Button} from 'antd'
const FormItem = Form.Item;
class PeopleModal extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const _this = this
        this.props.form.validateFields((err, values) => {
        if (!err) {
            _this.props.savePeople(values)
            }
        });
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                title="人群名称"
                visible={this.props.visible}
                footer={null}
                onCancel={this.props.onCancel}
                >
                <Form layout="inline" onSubmit={this.handleSubmit} style={{marginBottom: '20px'}}>
                    <FormItem>
                        {getFieldDecorator('peopleName', {
                            rules: [{ required: true, message: '人群名称不能超过15个字', max: 15 }],
                        })(
                            <Input placeholder="人群名称" style={{width: 350}}/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                         >
                            保存
                        </Button>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(PeopleModal)