import React from 'react'
import {
  HashRouter as Router,
  Route
 } from 'react-router-dom'
import { Menu, Icon } from 'antd'; 
import {routes} from '../routes/index'

// import HeaderView from './header'
// import App from '../components/app';
// import '../styles/theme.css'
import SideNav from './sideNav'
import request from '../util/request'
const reqObj = {
    userinfo:  `user?do=get-shop-info`
    
}
function getuserInfo () {
    let option={
        url: reqObj.userinfo
    }
    return request(option)
}
//router配置的是二维数组，这里处理的是内层部分
class HomeLayout extends React.Component {
	constructor () {
		super()
		this.state={
			data: [],
			user: null,
			smsData: null,
			seltotal: 0,
			sms_balance: 0
		}
	}
	componentDidMount () {
		getuserInfo ().then(data => {
			this.setState({
				user: data.user,
				sms_balance: data.user.sms_balance
			})
		})
	}
	commData = (data) => {
		if (data.step === 1) {
			this.setState({
				smsData: data.value
			})
		}
		if (data.step === 2) {
			this.setState({
				seltotal: data.seltotal
			})
		}
	}
	render() {
		const {routes} = this.props;
		const pathName = window.location.hash.replace('#', '')
		const RouteWithSubRoutes = (route) => (
			<Route 
				exact={route.exact} 
				path={route.path}
				render={props => {
					return(<route.component {...props} routes={route.routes} data={this.state} commData={this.commData}/>)}
				}
			/>
		)
		return (
			<div className='home' style={{marginTop: '20px'}}>
				<div className='container' style={{ display: 'flex' }}>
					<SideNav pathName={pathName} sms_balance={this.state.sms_balance}/>
					{routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}	
				</div>
			</div>
		)
	}
}


export default HomeLayout
