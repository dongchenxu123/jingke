import React from 'react'
import './App.css'
import SetsmsMain from '../views/setsms/setsmsMain'
class SetSmsview extends React.Component {
    render () {
        return (
             <div className="setsms">
                <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                    <h5 style={{lineHeight: '30px', fontSize: '14px'}}>短信资质</h5>
                </div>
                <SetsmsMain />
            </div>
        )
    }
}

export default SetSmsview