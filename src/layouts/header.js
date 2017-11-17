import React from 'react'

class HeaderView extends React.Component {
    render () {
        return (
            <div style={{width: '100%', height: '80px', backgroundColor: '#5a77d5', lineHeight: '80px', marginBottom: '20px'}}>
                <div className='container' style={{overflow: 'hidden'}}>
                    <div style={{float: 'left'}}>
                        <span style={{fontSize: '32px', color: '#fff'}}>喜宝CRM</span>
                    </div>
                    <div style={{float: 'right'}}>
                        <span style={{fontSize: '14px', color: '#fff', paddingRight: '35px'}}>客服电话 ： 400-123456789</span>
                        <span style={{fontSize: '14px', color: '#fff'}}>我的账户</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderView