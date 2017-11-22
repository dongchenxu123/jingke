import React from 'react'
import request from '../../util/request'
import '../../components/App.css'
import ProcessStep from './processStep'
import DetailData from './detailData'
import SmsDetail from './smsDetail'
const Obj = {
    task: `market?do=get-tasks`
}
function task (id) {
  let option={
        url: Obj.task,
        params: {
            id: id
        }
    }
  return request(option)
}
class PlanDetail extends React.Component {
    constructor () {
        super()
        this.state={
            detailData: {},
            task_status: 0,
            req_total_num: 0,
            rpt_succ_num: 0,
            rpt_click_num: 0,
            plan_name: '',
            template: '',
            menu: null,
            created: '',
            tags: []
        }
    }
    componentDidMount () {
        const id = this.props.match.params.id
        const _this = this
        task(id).then(data =>{
            const detailData = data.data
            if (detailData.length > 0) {
                const item = detailData[0]
                _this.setState({
                    detailData: item,
                    task_status: item.task_status,
                    req_total_num: item.req_total_num,
                    rpt_succ_num: item.rpt_succ_num,
                    rpt_click_num: item.rpt_click_num,
                    plan_name: item.plan_name,
                    template: item.template,
                    menu: item.menu,
                    created: item.created,
                    tags: item.tags
                })
            }
        })
    }
    render () {
        const {detailData, task_status, req_total_num, rpt_succ_num, rpt_click_num,
          plan_name, template, menu, created, tags} = this.state
        return (
            <div className="detail">
                <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                    <h5 style={{lineHeight: '30px'}}>当前营销计划已执行完成，您可以在下方查看营销效果</h5>
                </div>
                <ProcessStep task_status={task_status}/>
                <DetailData req_total_num={req_total_num}
                            rpt_succ_num={rpt_succ_num}
                            rpt_click_num={rpt_click_num}/>
                <SmsDetail plan_name={plan_name}
                           template={template}
                           menu={menu}
                           created={created}
                           tags={tags}/>
            </div>
        )
    }
}

export default PlanDetail