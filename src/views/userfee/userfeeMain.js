import React from 'react'
import { Tabs } from 'antd'
import RecordView from './record'
const TabPane = Tabs.TabPane
class UserfeeMain extends React.Component {
    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="消费记录" key="1">
                            <RecordView />
                        </TabPane>
                        <TabPane tab="充值记录" key="2">
                            <RecordView />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default UserfeeMain