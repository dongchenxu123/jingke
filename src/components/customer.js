import React from 'react'
import './App.css'
import CustomerList from '../views/customer/customerList'
class CustomerView extends React.Component {
    render () {
        return (
            <div className="customer">
                <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                    <h5 style={{lineHeight: '30px'}}>目前本店所有的客户信息</h5>
                </div>
                <CustomerList />
            </div>
        )
    }
}

export default CustomerView