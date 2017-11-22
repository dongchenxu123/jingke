import React from 'react'
import { Menu, Icon } from 'antd'; 
import {
  Link
 } from 'react-router-dom'
import { SubMenuData } from '../help/subMenuData'
import { FormateNum } from '../help/formate'
import { home } from '../help/linkUrl'
import FeebtnView from '../components/feeBtn'
const SubMenu = Menu.SubMenu;
class SideNav extends React.Component {
	render () {
		const name =  this.props.pathName
		const isIndex = this.props.pathName === home
		let defaultValue = []
		if (name === '/customer' || name === '/customerPeople') {
			defaultValue = ['sub2']
		}
		if (name === '/plan') {
			defaultValue = ['sub3']
		}
		if (name === '/templete') {
			defaultValue = ['sub4']
		}
		if (name === '/userfee' || name === '/setsms') {
			defaultValue = ['sub5']
		}
		const sms_balance = this.props.sms_balance
        return (
			<div style={{ display: 'flex' }}>
						<div>
						<div style={{padding: '40px 10px 20px 10px', backgroundColor: '#fff', marginBottom: '8px'}}>
							<p style={{paddingBottom: '15px'}}>短信余额 (条)</p>
							<p style={{paddingBottom: '20px'}}>
								<span style={{fontSize: '32px'}}>{FormateNum(sms_balance)}</span>
							</p>
							<FeebtnView />
						</div>
						<Menu
							style={{ width: 175, paddingBottom: '50px'}}
							defaultOpenKeys={defaultValue}
							mode="inline"
						>
						<Menu.Item key="1" className={ isIndex ? 'ant-menu-item-selected menuitem' : 'menuitem' }>
							<Link to={home}>
								<Icon type="home" style={{fontSize: '14px', color: '#5a76d5'}}/>
								<span style={{fontSize: '14px'}}>首页</span>
							</Link>
						</Menu.Item>
						{
							SubMenuData && SubMenuData.length > 0
							? SubMenuData.map ((item, index) => {
								return (
									<SubMenu 
									key={item.key} 
									title={<span><Icon type={item.icon} style={{fontSize: '14px', color: '#5a76d5'}}/><span style={{fontSize: '14px'}}>{item.menuName}</span></span>}
									>
										{
											item.menuList.length > 0
											? item.menuList.map((option, i) => {
												const isSelect = this.props.pathName === option.linkUrl
												return (
													<Menu.Item key={option.key} className={ isSelect ? 'ant-menu-item-selected menuitem' : 'menuitem' }>
														<Link to={option.linkUrl}>
															{option.name}
														</Link>
													</Menu.Item>
												)
											})
											: null
										}
									</SubMenu>
								)
							})
							: <div>没有数据</div>
						}
					</Menu>
				</div>					
			</div>
		)
	}
}

export default SideNav