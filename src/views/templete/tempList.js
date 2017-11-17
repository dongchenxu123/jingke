import React from 'react'
import {Button, Icon, Modal} from 'antd'
import FormView from './form'
class TempListView extends React.Component {
    render () {
        return (
            <div>
                <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                    <h5 style={{lineHeight: '30px', fontSize: '14px'}}>菜单编辑中，请确认菜单编辑完成后点击“保存”，每次编辑后的菜单审核都需要1-3个工作日，如有需要请提前编辑</h5>
                </div>
                <div className="panel panel-default">
                    <FormView />
                </div>
            </div>
        )
    }
}

export default TempListView