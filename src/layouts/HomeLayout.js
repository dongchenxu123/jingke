import React from 'react'
import { connect } from 'react-redux'
import {
  HashRouter as Router,
  Route
 } from 'react-router-dom'
import { Menu, Icon, Spin } from 'antd'; 
import {routes} from '../routes/index'
import ZizhiModal from '../components/zizhiModal'
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
			sms_balance: 0,
			company_license: '',
			sms_sign: ''
		}
	}
	componentDidMount () {
		// console.log(this.props)
		// const _this = this;
		
		// this.props.dispatch({
		// 	type:'user/getUser'
		// })
		// getuserInfo ().then(data => {
		// 	_this.setState({
		// 		user: data.user,
		// 		sms_balance: data.user.sms_balance,
		// 		company_license: data.user.company_license,
		// 		sms_sign: data.user.sms_sign
		// 	})
			
		// })
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
		const {routes, user, shop } = this.props;
		// const {company_license, sms_sign} = this.state
		const pathName = window.location.hash.replace('#', '')
		const {sms_balance, company_license, sms_sign } = user
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
				<div className='home' style={{marginTop: '20px'}} >
					<div className='container' style={{ display: 'flex' }}>
						<ZizhiModal company_license={company_license}
									sms_sign={sms_sign}
									pathName={pathName}/>
						
						<SideNav pathName={pathName} sms_balance={sms_balance}/>
						
						{routes.map((route, i) => (
							<RouteWithSubRoutes key={i} {...route}/>
						))}	
					</div>
				</div>
		)
	}
}

function mapStateToProps(state) {
	const { user, shop } = state.user;
	return {
	  user,
	  shop,
	  loading: state.loading.effects['user/getUser']
	}
  }

export default connect(mapStateToProps)(HomeLayout)
