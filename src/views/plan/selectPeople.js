import React from 'react'
import PlanTitleView from './planTitle'
import '../../components/App.css'
import StepView from './step'
import PeopleTable from './peopleList'
class SelectPeople extends React.Component {
    render () {
        return (
            <div className="selectpeople">
                <PlanTitleView/>
                <StepView current={1}/>
                <PeopleTable />
            </div>
        )
    }
}

export default SelectPeople