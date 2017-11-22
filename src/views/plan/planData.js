import React from 'react'
import {FormateNum} from '../../help/formate'
class PlanData extends React.Component {
    render () {
        const {curr_month_cnt, curr_week_cnt, waiting_cnt} = this.props
        return (
            <div className="panel-body">
                <div className="col-md-4" style={{borderRight: '1px solid #dedede'}}>
                    <p style={{padding: '20px 0', textAlign: 'center'}}>即将执行</p>
                    <p style={{paddingBottom: '20px', textAlign: 'center'}}>
                        <span style={{fontSize: '32px', color: '#6acea5'}}>{FormateNum(waiting_cnt)}</span>
                        <span style={{fontSize: '30px'}}>个计划</span>
                    </p>
                </div>
                <div className="col-md-4" style={{borderRight: '1px solid #dedede'}}>
                    <p style={{padding: '20px 0', textAlign: 'center'}}>本周已执行</p>
                    <p style={{paddingBottom: '20px', textAlign: 'center'}}>
                        <span style={{fontSize: '32px', color: '#6acea5'}}>{FormateNum(curr_week_cnt)}</span>
                        <span style={{fontSize: '28px', paddingLeft: '5px'}}>个计划</span>
                    </p>
                </div>
                <div className="col-md-4">
                    <p style={{padding: '20px 0', textAlign: 'center'}}>本月已执行</p>
                    <p style={{paddingBottom: '20px', textAlign: 'center'}}>
                        <span style={{fontSize: '32px', color: '#6acea5'}}>{FormateNum(curr_month_cnt)}</span>
                        <span style={{fontSize: '30px'}}>个计划</span>
                    </p>
                </div>
            </div>
        )
    }
}


export default PlanData