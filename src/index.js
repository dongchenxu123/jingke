/*import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore';
import Root from './containers/Root';
//const initialState = window.__INITIAL_STATE__

const store = configureStore()
// Render the main component into the dom
ReactDOM.render(
	<Root store={store} />, document.getElementById('root')
);
registerServiceWorker();*/


import registerServiceWorker from './registerServiceWorker';
import createLoading from 'dva-loading';
import { message } from 'antd';

import dva from 'dva';
import createHistory from 'history/createHashHistory';
import { getUser } from './service/userService'
// import './style/global.less'
function startApp(data){
	const app = dva({
		history: createHistory(),
		onError(err) {
			let str = err + ' '
			message.error(str);
		},
		initialState:{
			user:{
				user: data.user,
				shop: data.shop || null
			}
		}
	})
	
	app.use(createLoading())
	app.model(require('./models/user').default);
	app.router(require('./routes/index').default);
	app.start('#root')
}
function getPrefix(){

	getUser().then(data => {
		console.log(data)
		if('user' in data) {
			startApp(data)
		}
	})
}
getPrefix()
registerServiceWorker();

