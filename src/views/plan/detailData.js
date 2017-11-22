import React from 'react'
import { Row, Col } from 'antd'
const style={
    title: {
        color: '#999',
        lineHeight: '30px',
        fontSize: '14px'
    },
    content: {
        fontSize: '24px',
        lineHeight: '30px'
    }
}
class DetailData extends React.Component {
    render () {
        const {rpt_click_num, rpt_succ_num, req_total_num} = this.props
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                        <h5 style={{lineHeight: '30px'}}>营销效果</h5>
                    </div>
                    <Row>
                        <Col span={8} className="text-center">
                            <p style={style.title}>发送量</p>
                            <p style={style.content}>{req_total_num}</p>
                        </Col>
                        <Col span={8} className="text-center">
                            <p style={style.title}>触达量</p>
                            <p style={style.content}>{rpt_succ_num}</p>
                        </Col>
                        <Col span={8} className="text-center">
                            <p style={style.title}>点击量</p>
                            <p style={style.content}>{rpt_click_num}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default DetailData