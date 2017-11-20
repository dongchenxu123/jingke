import React from 'react'
import { Steps } from 'antd'
const Step = Steps.Step
class StepView extends React.Component {
    render () {
        return (
            <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px'}}>
                <Steps current={this.props.current}>
                    <Step title="编辑短信内容" />
                    <Step title="选择客户人群" />
                    <Step title="完成" />
                </Steps>
            </div>
        )
    }
}

export default StepView