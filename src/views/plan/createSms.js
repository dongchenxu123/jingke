import React from 'react'
import '../../components/App.css'
import PlanTitle from './planTitle'
import StepView from './step'
import FormView from './form'
class CreateSms extends React.Component {
    render () {
        return (
            <div className="createSms">
                <PlanTitle />
                <StepView current={0}/>
                <FormView />
            </div>
            
        )
    }
}

export default CreateSms