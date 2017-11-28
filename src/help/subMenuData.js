import { customer, customerPeople, templete, userfee, setsms, plan } from './linkUrl'
export const SubMenuData = [{
	key: 'sub2',
	menuName: '客户管理',
	icon: 'team',
	menuList: [{
		key: 'customer',
		name: '客户列表',
		linkUrl: customer
	}, {
		key: 'customerPeople',
		name: '客户人群',
		linkUrl: customerPeople
	}]
}, {
	key: 'sub3',
	menuName: '计划管理',
	icon: 'setting',
	menuList: [{
		key: 4,
		name: '计划列表',
		linkUrl: plan
	}]
}, {
	key: 'sub4',
	menuName: '模板设置',
	icon: 'appstore-o',
	menuList: [{
		key: 'templete',
		name: '短信模板设置',
		linkUrl: templete
	}]
}, {
	key: 'sub5',
	menuName: '账户中心',
	icon: 'user',
	menuList: [{
		key: 'userfee',
		name: '账户管理',
		linkUrl: userfee
	}, {
		key: 'setsms',
		name: '账户设置',
		linkUrl: setsms
	}]
}]