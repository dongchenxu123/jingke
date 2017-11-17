import React from 'react'
import { Alert, Tabs } from 'antd'
import CustomerList from '../customer/customerList'
import FormTxtView from './formTxt'
const TabPane = Tabs.TabPane;
import '../../components/App.css'
class CreatePeoTags extends React.Component {
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
                                <FormTxtView />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePeoTags