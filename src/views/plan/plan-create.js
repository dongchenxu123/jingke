import React from 'react'
import { connect } from 'react-redux'

import PlanTitle from './planTitle'
import StepView from './step'

import PlanInfo from './createSms'
import PlanPeople from './selectPeople'
import Finash from './finish'

class PlanCreate extends React.Component {
    setPlanInfo = (values) => {
        console.log('plan info', values, this)
        this.props.dispatch({
            type: 'plan/setPlanInfo',
            payload: values
        })
    }
    setTags = (values) => {
        console.log('plan tags', values)
        this.props.dispatch({
            type: 'plan/createPlan',
            payload: values
        })
    }
    recreate = () => {
        this.props.dispatch({
            type: 'plan/recreate'
        })
    }
    gotoList = () => {
        this.props.dispatch({
            type: 'plan/gotolist'
        })
    }
    getStepComponent() {
        const { step, user, selectTotal } = this.props;
        switch (step) {
            case 0:
                return <PlanInfo  submitForm={this.setPlanInfo}/>
           
            case 1:
                return  <PlanPeople setTags={this.setTags}/>
            
            case 2:
                return  <Finash user={user} total={selectTotal} recreate={this.recreate} gotoList={this.gotoList}/>
       
            default:
                break;
        }
    }
    render() {
        const { step } = this.props;
        // console.log('step', step)
        // const component = this.getStepComponent()
        return (
            <div className="createSms">
                <PlanTitle />
                <StepView current={step} />
                {
                    this.getStepComponent()
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user } = state.user;
    const { step, selectTotal } = state.plan
	return {
		user, step, selectTotal
	}
}
export default connect(mapStateToProps)(PlanCreate)