import React from 'react'
import '../../components/App.css'
import PlanTitle from './planTitle'
import StepView from './step'
import FormView from './form'
import {formatDateTime} from '../../help/formate'
class CreateSms extends React.Component {
    SubmitForm = (values, saveData) => {
        console.log(values, saveData)
        const data = {
            plan_name: values.planTitle,
            send_time: formatDateTime(new Date(values.sendTime)),
            template: values.sms,
            sign: saveData.sign,
            sign_id: saveData.sign_id,
            menu: saveData.menu
        }
        this.props.commData({step:1, value: data})
    }
    render () {
        const user = this.props.data.user
        return (
            <div className="createSms">
                <PlanTitle />
                <StepView current={0}/>
                <FormView user={user}
                          SubmitForm={this.SubmitForm}/>
            </div>
            
        )
    }
}

export default CreateSms