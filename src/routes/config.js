
import JdHomeView from '../components/App';
import CustomerView from '../components/customer'
import CustomerPeople from '../components/customerPeople'
import CreatePeoTags from '../views/customerPeople/createPeoTags'
import TempleteView from '../views/templete/tempList'
import UserFee from '../views/userfee/userfeeMain'
import SetsmsView from '../components/setSms'
import HomeLayout from '../layouts/HomeLayout'
import PlanMain from '../views/plan/planMain'
import CreateSms from '../views/plan/createSms'
import SelectPeople from '../views/plan/selectPeople'
import Finish from '../views/plan/finish'
import PlanDetail from '../views/plan/planDetail'
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
			},
			{
				path: '/createSms',
				component: CreateSms
			},
			{
				path: '/SelectPeople',
				component: SelectPeople
			},
			{
				path: '/finish',
				component: Finish
			},
			{
				path: '/planDetail/:id',
				component: PlanDetail
			}
		]
	},
	
]
