import React from 'react'
import { connect } from 'react-redux'
import { Alert, Tabs, message } from 'antd'
import CustomerList from '../customer/customerList'
import FormTxtView from './formTxt'
import request from '../../util/request'
import '../../components/App.css'
const TabPane = Tabs.TabPane;
const Obj = {
    createTag: `customer?do=add-tag`
}

function addTag (values) {
    let dataVal = {}
    if (values) {
        dataVal = {
            name: values.name,
            telephone_file: values.upload.file.response.res.url,
            total_cnt: values.upload.file.response.res.total
        }
    }
    let option={
        url: Obj.createTag,
        method: 'post',
        data: {
            data: JSON.stringify(dataVal)
        }
    }
    return request(option)
}
class CreatePeoTags extends React.Component {
    onSubmit = (values) => {
    
      addTag(values).then(data => {
        if (data !== null) {
            message.success(`创建成功！`)
            this.props.dispatch({
                type: 'peopleTag/gotolist'
            })
        } else {
            message.error(`上传文件内容为空或者格式不正确`)
        }

      })
    }
    render () {
        return (
            <div className='peopleTags'>
                <div className='panel-heading' style={{backgroundColor: '#fff', marginBottom: '20px'}}>
                    <Alert message="客户人群创建成功后，您可以在营销计划中直接调用" type="info" showIcon />
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="通过查询自动检索" key="1">
                                <CustomerList />
                            </TabPane>
                            <TabPane tab="通过文本导入" key="2">
                                <FormTxtView onSubmitTxt={this.onSubmit}/>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(CreatePeoTags)