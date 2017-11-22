import React from 'react'
import { Icon, Card, Col, Row } from 'antd';
import {FormateNum} from '../../help/formate'
class DateView extends React.Component {
    render () {
        const {curr_month, last_month, today} = this.props
        let send = 0
        let suc = 0
        let click = 0
        if (curr_month && last_month) {
            if (curr_month.req_total_num > 0) {
               send = (curr_month.req_total_num - last_month.req_total_num)/curr_month.req_total_num*100
            }
            if (curr_month.rpt_succ_num > 0) {
                suc = (curr_month.rpt_succ_num - last_month.rpt_succ_num)/curr_month.rpt_succ_num*100
            }
            if (curr_month.rpt_click_num > 0) {
                click = (curr_month.rpt_click_num - last_month.rpt_click_num)/curr_month.rpt_click_num*100
            }
        }
        return (
        <div style={{ background: '#ECECEC'}}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="本月发送量" bordered={false} style={{marginBottom: '20px'}}>
                        <div style={{color: '#6acea5', fontSize: '32px', textAlign: 'center', paddingBottom: '10px'}}>
                            {
                                curr_month ? FormateNum(curr_month.req_total_num) : 0
                            }
                        </div>
                        <p style={{paddingBottom: '8px', borderBottom: '1px solid #dedede'}}>
                            <span style={{fontSize: '14px'}}>同比上月</span>
                            <span style={{ paddingLeft: '20px', fontSize: '20px'}}>{send}%
                                {
                                    send < 0
                                    ? <Icon type="arrow-up" style={{color: '#ff0000', fontSize: '14px'}}/>
                                    : <Icon type="arrow-up" style={{color: '#6acea5', fontSize: '14px'}}/>
                                }
                            </span>
                        </p>
                        <p style={{paddingTop: '8px'}}>
                            <span style={{fontSize: '14px'}}>今日发送</span>
                            <span style={{paddingLeft: '20px', fontSize: '14px'}}>
                                {
                                   today ? FormateNum(today.req_total_num) : 0
                                }
                            </span>
                        </p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="本月触达量" bordered={false} style={{marginBottom: '20px'}}>
                        <div style={{color: '#6acea5', fontSize: '32px', textAlign: 'center', paddingBottom: '10px'}}>
                            {
                                curr_month ? FormateNum(curr_month.rpt_succ_num) : 0
                            }
                        </div>
                        <p style={{paddingBottom: '8px', borderBottom: '1px solid #dedede'}}>
                            <span style={{fontSize: '14px'}}>同比上月</span>
                            <span style={{paddingLeft: '20px', fontSize: '20px'}}>{suc}%
                                {
                                    suc < 0
                                    ? <Icon type="arrow-up" style={{color: '#ff0000', fontSize: '14px'}}/>
                                    : <Icon type="arrow-up" style={{color: '#6acea5', fontSize: '14px'}}/>
                                }
                            </span>
                        </p>
                        <p style={{paddingTop: '8px'}}>
                            <span style={{fontSize: '14px'}}>今日触达</span>
                            <span style={{paddingLeft: '20px', fontSize: '14px'}}>
                                {
                                   today ? FormateNum(today.rpt_succ_num) : 0
                                }
                            </span>
                        </p>
                    </Card>
                </Col>
                <Col span={8}>
                <Card title="本月点击量" bordered={false} style={{marginBottom: '20px'}}>
                        <div style={{color: '#6acea5', fontSize: '32px', textAlign: 'center', paddingBottom: '10px'}}>
                            {
                                curr_month ? FormateNum(curr_month.rpt_click_num) : 0
                            }
                        </div>
                        <p style={{paddingBottom: '8px', borderBottom: '1px solid #dedede'}}>
                            <span style={{fontSize: '14px'}}>同比上月</span>
                            <span style={{paddingLeft: '20px', fontSize: '20px'}}>{click}%
                                {
                                    click < 0
                                    ? <Icon type="arrow-up" style={{color: '#ff0000', fontSize: '14px'}}/>
                                    : <Icon type="arrow-up" style={{color: '#6acea5', fontSize: '14px'}}/>
                                }
                            </span>
                        </p>
                        <p style={{paddingTop: '8px'}}>
                            <span style={{fontSize: '14px'}}>今日点击</span>
                            <span style={{paddingLeft: '20px', fontSize: '14px'}}>
                                {
                                   today ? FormateNum(today.rpt_click_num) : 0
                                }
                            </span>
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
        )
    }
}
export default DateView