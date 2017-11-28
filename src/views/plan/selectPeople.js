import React from 'react'
// import PlanTitleView from './planTitle'
import '../../components/App.css'
// import StepView from './step'
import PeopleTable from './peopleList'
import request from '../../util/request'
// import {finish} from '../../help/linkUrl'
// import createHistory from 'history/createHashHistory';
// const history = createHistory()
const reqObj = {
    tagStats:  `customer?do=tag-stats`,
    getTags: `customer?do=get-tags`,
    addTask: `market?do=add-task`
}
function getTagStats (selectedRowKeys) {
    const strTags = selectedRowKeys.join(',')
    let option={
        url: reqObj.tagStats,
        params: {
            tag_ids: strTags
        }
    }
    return request(option)
}
function getTags () {
    let option={
        url: reqObj.getTags
    }
    return request(option)
}
// function addTask (sendData) {
//     let option={
//         url: reqObj.addTask,
//         method: 'post',
//         data: {
//             data: JSON.stringify(sendData)
//         }
//     }
//     return request(option)
// }
class SelectPeople extends React.Component {
    constructor () {
        super()
        this.state={
            tags: [],
            loading: true,
            seltotal: 0,
            showTotal: false
        }
    }
    componentDidMount () {
        getTags().then(data => {
            this.setState({
                tags: data,
                loading: false
            })
        })
    }
    selectTags = (selectedRowKeys) => {
        this.setState({
            showTotal: true
        })
        getTagStats(selectedRowKeys).then(data => {
            this.setState({
                seltotal: data.total,
                showTotal: false
            })
        })
    }
    createPlan = (selectedRowKeys) => {
        const tag_ids = selectedRowKeys.join(',')
        // const user = this.props.user
        // const smsData = this.props.data.smsData
        const seltotal = this.state.seltotal
        // if (user === null || smsData === null) {
        //     return
        // }
        // let sendData={
        //     plan_name: smsData.plan_name,
        //     send_time: smsData.send_time,
        //     template: smsData.template,
        //     sign_id: user.sign_id,
        //     // sign: user.sms_sign,
        //     // menu: user.sms_menu.menu,
        //     tag_ids: tag_ids
        // }
        this.props.setTags({tag_ids, selectTotal: seltotal})
        // addTask (sendData).then(data => {
        //     if (data.length > 0) {
        //         history.push(finish)
        //         this.props.commData({step:2, seltotal: seltotal})
        //     }
        // })
    }
    render () {
        const {tags, loading, seltotal, showTotal} = this.state
        return (
             <PeopleTable 
                tagsData={tags}
                loading={loading}
                selectTags={this.selectTags}
                seltotal={seltotal}
                showTotal={showTotal}
                createPlan={this.createPlan}
            />
        )
    }
}

export default SelectPeople