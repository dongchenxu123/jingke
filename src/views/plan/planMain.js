import React from 'react'
import '../../components/App.css'
import PlanList from '../home/planList'

class PlanMainview extends React.Component {
    render () {
        console.log(this.props.data)
        return (
            <div className="plan">
              <div className="panel panel-default">
                    <div className="panel-heading" style={{backgroundColor: '#fff', height: '50px'}}>
                        <h5 style={{lineHeight: '30px'}}>执行概况</h5>
                    </div>
                    <div className="panel-body">
                       <div className="col-md-4" style={{borderRight: '1px solid #dedede'}}>
                            <p style={{padding: '20px 0', textAlign: 'center'}}>即将执行</p>
                            <p style={{paddingBottom: '20px', textAlign: 'center'}}>
                                <span style={{fontSize: '32px', color: '#f3a01c'}}>2</span>
                                <span style={{fontSize: '30px'}}>个计划</span>
                            </p>
                        </div>
                        <div className="col-md-4" style={{borderRight: '1px solid #dedede'}}>
                            <p style={{padding: '20px 0', textAlign: 'center'}}>本周已执行</p>
                            <p style={{paddingBottom: '20px', textAlign: 'center'}}>
                                <span style={{fontSize: '32px', color: '#f3a01c'}}>2</span>
                                <span style={{fontSize: '28px', paddingLeft: '5px'}}>个计划</span>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p style={{padding: '20px 0', textAlign: 'center'}}>本月已执行</p>
                            <p style={{paddingBottom: '20px', textAlign: 'center'}}>
                                <span style={{fontSize: '32px', color: '#f3a01c'}}>2</span>
                                <span style={{fontSize: '30px'}}>个计划</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" style={{backgroundColor: '#fff', height: '50px'}}>
                        <h5 style={{lineHeight: '30px'}}>短信营销计划</h5>
                    </div>
                    <div className="panel-body">
                       
                    </div>
                </div>
                <PlanList />
            </div>
        )
    }
}

export default PlanMainview