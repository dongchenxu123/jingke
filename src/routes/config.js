
import JdHomeView from '../components/app';
import CustomerView from '../components/customer'
import CustomerPeople from '../components/customerPeople'
import CreatePeoTags from '../views/customerPeople/createPeoTags'
import TempleteView from '../components/templete'
import UserFee from '../components/userFee'
import SetsmsView from '../components/setSms'
import HomeLayout from '../layouts/HomeLayout'
import PlanMain from '../views/plan/planMain'

export const routes = [
	{
		path: '/',
		component: HomeLayout,
		routes: [
			{
				path: '/',
				exact: true,
				component: JdHomeView
			},
			{
				path: '/customer',
				exact: true,
				component: CustomerView
			},
			{
				path: '/customerPeople',
				exact: true,
				component: CustomerPeople
			},
			{
				path: '/createPeoTags',
				component: CreatePeoTags
			},
			{
				path: '/templete',
				component: TempleteView
			},
			{
				path: '/userfee',
				component: UserFee
			},
			{
				path: '/setsms',
				component: SetsmsView
			},
			{
				path: '/plan',
				component: PlanMain
			}
		]
	},
	
]
