import React from 'react'
import PlanTitleView from './planTitle'
import '../../components/App.css'
import StepView from './step'
class FinishView extends React.Component {
    render () {
        return (
            <div className="finish">
                <PlanTitleView />
                <StepView current={2}/>
            </div>
        )
    }
}

export default FinishView