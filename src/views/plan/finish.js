import React from 'react'
import PlanTitleView from './planTitle'
import '../../components/App.css'
import StepView from './step'
import CreateInfo from './createInfo'
class FinishView extends React.Component {
    render () {
        // console.log(this.props.data)
        const {user, seltotal} = this.props.data
        return (
            <div className="finish">
                <PlanTitleView />
                <StepView current={2}/>
                <CreateInfo user={user} seltotal={seltotal}/>
            </div>
        )
    }
}

export default FinishView