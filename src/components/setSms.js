import React from 'react'
import './App.css'
import SetsmsMain from '../views/setsms/setsmsMain'
class SetSmsview extends React.Component {
    render () {
        return (
             <div className="setsms">
                <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                    <h5 style={{lineHeight: '30px'}}>
                        <span style={{fontSize: '14px'}}>短信资质</span>
                        <span style={{paddingLeft: '20px', color: '#333'}}>如有疑问请联系客服!</span>
                    </h5>
                </div>
                <SetsmsMain />
            </div>
        )
    }
}

export default SetSmsview