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
			smsData: {}
		}
	}
	componentDidMount () {
		getuserInfo ().then(data => {
			this.setState({
				user: data.user
			})
		})
	}
	commData = (data) => {
		if (data.step === 1) {
			this.setState({
				smsData: data.value
			})
		}
		
	}
	render() {
		const {routes, location} = this.props;
		const pathName = location.pathname
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
					<SideNav pathName={pathName}/>
					{routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}	
					
				</div>
			</div>
		)
	}
}


export default HomeLayout
