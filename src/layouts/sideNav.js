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

const sideNav = ({ pathName, sms_balance }) => {
	// console.log("props ====>", pathName, sms_balance)
	const name = pathName
	const isIndex = pathName === home
	let defaultValue = []
	if (name === '/customer' || name === '/customerPeople') {
		defaultValue = ['sub2']
	}
	if (name === '/plan' || name === '/createSms' || name === '/SelectPeople' || name === '/finish') {
		defaultValue = ['sub3']
	}
	if (name === '/templete') {
		defaultValue = ['sub4']
	}
	if (name === '/userfee' || name === '/setsms') {
		defaultValue = ['sub5']
	}
	// console.log('defaultValue ---->', defaultValue)
	//const sms_balance = this.props.sms_balance
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ padding: '40px 15px 20px 15px', backgroundColor: '#fff', marginBottom: '8px' }}>
				<p style={{ margin: '10px 0' }}>
					<img 
					alt=''
					src="https://img10.360buyimg.com/imgzone/jfs/t12295/5/989860713/11710/c715e246/5a17ffbbNe0679e46.jpg" style={{ width: '170px' }} />
				</p>
				<p style={{ paddingBottom: '15px' }}>短信余额 (条)</p>
				<p style={{ paddingBottom: '20px' }}>
					<span style={{ fontSize: '32px' }}>{FormateNum(sms_balance)}</span>
				</p>
				<FeebtnView />
			</div>
			<Menu
				style={{ width: 200, paddingBottom: '50px' }}
				defaultOpenKeys={defaultValue}
				selectedKeys={defaultValue}
				
				mode="inline"
			>
				<Menu.Item key="1" className={isIndex ? 'ant-menu-item-selected menuitem' : 'menuitem'}>
					<Link to={home}>
						<Icon type="home" style={{ fontSize: '14px', color: '#5a76d5' }} />
						<span style={{ fontSize: '14px' }}>首页</span>
					</Link>
				</Menu.Item>
				{
					SubMenuData && SubMenuData.length > 0
						? SubMenuData.map((item, index) => {
							return (
								<SubMenu
									key={item.key}
									title={<span><Icon type={item.icon} style={{ fontSize: '14px', color: '#5a76d5' }} /><span style={{ fontSize: '14px' }}>{item.menuName}</span></span>}
								>
									{
										item.menuList.length > 0
											? item.menuList.map((option, i) => {
												const isSelect = pathName === option.linkUrl
												return (
													<Menu.Item key={option.key} className={isSelect ? 'ant-menu-item-selected menuitem' : 'menuitem'}>
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
	)
}

export default sideNav