import React from 'react'
import { Icon, Card, Col, Row } from 'antd';
import {FormateNum} from '../../help/formate'
class DateView extends React.Component {
    render () {
        return (
            // <div style={{ background: '#f2f2f2', padding: '15px', marginBottom: '20px'}}>
            //     <Row gutter={16}>
            //         <Card title="本月发送量" bordered={false} span={8}>
            //             <div style={{color: '#eaa50a', fontSize: '32px', textAlign: 'center', paddingBottom: '10px'}}>8000</div>
            //             <p>
            //                 <span style={{fontSize: '14px'}}>同比上月</span>
            //                 <span style={{color: '#edad31', paddingLeft: '10px', fontSize: '14px'}}>10%<Icon type="arrow-up" style={{color: '#edad31', fontSize: '14px'}}/></span>
            //             </p>
            //             <p>
            //                 <span style={{fontSize: '14px'}}>今日发送</span>
            //                 <span style={{paddingLeft: '10px', fontSize: '14px'}}>6551</span>
            //             </p>
            //         </Card>
            //         <Card title="本月发送量" bordered={false} span={8}>
            //             <div style={{color: '#eaa50a', fontSize: '32px', textAlign: 'center', paddingBottom: '10px'}}>8000</div>
            //             <p>
            //                 <span style={{fontSize: '14px'}}>同比上月</span>
            //                 <span style={{color: '#edad31', paddingLeft: '10px', fontSize: '14px'}}>10%<Icon type="arrow-up" style={{color: '#edad31', fontSize: '14px'}}/></span>
            //             </p>
            //             <p>
            //                 <span style={{fontSize: '14px'}}>今日发送</span>
            //                 <span style={{paddingLeft: '10px', fontSize: '14px'}}>6551</span>
            //             </p>
            //         </Card>
            //         <Card title="本月发送量" bordered={false} span={8}>
            //             <div style={{color: '#eaa50a', fontSize: '32px', textAlign: 'center', paddingBottom: '10px'}}>8000</div>
            //             <p>
            //                 <span style={{fontSize: '14px'}}>同比上月</span>
            //                 <span style={{color: '#edad31', paddingLeft: '10px', fontSize: '14px'}}>10%<Icon type="arrow-up" style={{color: '#edad31', fontSize: '14px'}}/></span>
            //             </p>
            //             <p>
            //                 <span style={{fontSize: '14px'}}>今日发送</span>
            //                 <span style={{paddingLeft: '10px', fontSize: '14px'}}>6551</span>
            //             </p>
            //         </Card>
            //     </Row>
                
            // </div>
            <div style={{ background: '#ECECEC',}}>
            <Row gutter={16}>
            <Col span={8}>
                <Card title="本月发送量" bordered={false} style={{marginBottom: '20px'}}>
                    <div style={{color: '#eaa50a', fontSize: '32px', textAlign: 'center', paddingBottom: '10px'}}>8000</div>
                    <p style={{paddingBottom: '8px', borderBottom: '1px solid #dedede'}}>
                        <span style={{fontSize: '14px'}}>同比上月</span>
                        <span style={{color: '#edad31', paddingLeft: '20px', fontSize: '20px'}}>10%<Icon type="arrow-up" style={{color: '#edad31', fontSize: '14px'}}/></span>
                    </p>
                    <p style={{paddingTop: '8px'}}>
                        <span style={{fontSize: '14px'}}>今日发送</span>
                        <span style={{paddingLeft: '20px', fontSize: '14px'}}>{FormateNum(6551)}</span>
                    </p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="本月发送量" bordered={false} style={{marginBottom: '20px'}}>
                    <div style={{color: '#eaa50a', fontSize: '32px', textAlign: 'center', paddingBottom: '10px'}}>8000</div>
                    <p style={{paddingBottom: '8px', borderBottom: '1px solid #dedede'}}>
                        <span style={{fontSize: '14px'}}>同比上月</span>
                        <span style={{color: '#edad31', paddingLeft: '20px', fontSize: '20px'}}>10%<Icon type="arrow-up" style={{color: '#edad31', fontSize: '14px'}}/></span>
                    </p>
                    <p style={{paddingTop: '8px'}}>
                        <span style={{fontSize: '14px'}}>今日发送</span>
                        <span style={{paddingLeft: '20px', fontSize: '14px'}}>{FormateNum(6551)}</span>
                    </p>
                </Card>
            </Col>
            <Col span={8}>
               <Card title="本月发送量" bordered={false} style={{marginBottom: '20px'}}>
                    <div style={{color: '#eaa50a', fontSize: '32px', textAlign: 'center', paddingBottom: '10px'}}>8000</div>
                    <p style={{paddingBottom: '8px', borderBottom: '1px solid #dedede'}}>
                        <span style={{fontSize: '14px'}}>同比上月</span>
                        <span style={{color: '#edad31', paddingLeft: '20px', fontSize: '20px'}}>10%<Icon type="arrow-up" style={{color: '#edad31', fontSize: '14px'}}/></span>
                    </p>
                    <p style={{paddingTop: '8px'}}>
                        <span style={{fontSize: '14px'}}>今日发送</span>
                        <span style={{paddingLeft: '20px', fontSize: '14px'}}>{FormateNum(6551)}</span>
                    </p>
                </Card>
            </Col>
            </Row>
            </div>
        )
    }
}
export default DateView