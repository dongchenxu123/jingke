import React from 'react'
// import PlanTitleView from './planTitle'
import '../../components/App.css'
// import StepView from './step'
import CreateInfo from './createInfo'
class FinishView extends React.Component {
    render () {
        // console.log(this.props.data)
        const {user, total, recreate, gotoList} = this.props
        return (
            <CreateInfo user={user} seltotal={total} recreate={recreate} gotoList={gotoList}/>
        )
    }
}

export default FinishView