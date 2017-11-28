import React from 'react'
import { connect } from 'react-redux'
import '../../components/App.css'
// import PlanTitle from './planTitle'
// import StepView from './step'
import FormView from './form'
import {formatDateTime} from '../../help/formate'
class CreateSms extends React.Component {
    SubmitForm = (values) => {
        const data = {
            plan_name: values.planTitle,
            send_time: formatDateTime(new Date(values.sendTime)),
            template: values.sms
        }
        this.props.submitForm({step:1, value: data})
    }
    render () {
        const user = this.props.user
        return (
                <FormView 
                    user={user}
                    SubmitForm={this.SubmitForm}
                />            
        )
    }
}
function mapStateToProps(state) {
	const { user, shop } = state.user;
	return {
		user,
		shop
	}
}
export default connect(mapStateToProps)(CreateSms)