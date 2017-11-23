import React from 'react'
import './App.css'
import TempListView from '../views/templete/tempList'
class TempleteView extends React.Component {
    render () {
        const user = this.props.data.user
        return (
            <div className="templete">
                <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                    <h5 style={{lineHeight: '30px', fontSize: '14px'}}>短信模板设置</h5>
                </div>
                <TempListView user={user}/>
            </div>
        )
    }
}

export default TempleteView