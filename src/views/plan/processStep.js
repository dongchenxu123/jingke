import React from 'react'
import { Steps } from 'antd';
const Step = Steps.Step;
class ProcessStep extends React.Component {
    renderStep () {
        const {task_status} = this.props
        let cur = 0
        if (task_status === 12 || task_status === 23) {
            cur = 1
        }
        if (task_status === 24 || task_status === 22 || task_status === 20) {
            cur = 2
        }
        if (task_status === 21) {
            cur = 3
        }
        return (
            <Steps current={cur}>
                <Step title="创建营销计划" />
                <Step title="计划审批" />
                <Step title="投放" />
                <Step title="完成" />
            </Steps>
        )
    }
    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                        <h5 style={{lineHeight: '30px'}}>流程进度</h5>
                    </div>
                    <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px'}}>
                        {
                            this.renderStep()
                        }   
                    </div>
                </div>
            </div>
        )
    }
}

export default ProcessStep