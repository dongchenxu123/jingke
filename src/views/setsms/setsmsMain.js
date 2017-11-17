import React from 'react'
import {Button} from 'antd'
import SetsmsForm from './setsmsForm'
class SetsmsMain extends React.Component {
    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <SetsmsForm />
                </div>
            </div>
        )
    }
}

export default SetsmsMain