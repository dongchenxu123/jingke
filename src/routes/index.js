import React from 'react'
import {
  Router,
  Route, Link
 } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'; 
import {routes} from './config'
import createHistory from 'history/createHashHistory'
// const history = createHistory()
const SubMenu = Menu.SubMenu;

//router配置的是二维数组，这里处理的是外层部分
const RouteConf = ({app, history}) => {
    const self = this;
    console.log(app._store.getState())
    const RouteWithSubRoutes = (route) => (
        <Route 
            exact={route.exact} 
            path={route.path} 
            render={props => {
                return(<route.component {...props} routes={route.routes} />)
        }}/>
    )
    return (
        <Router basename='/' history={history}> 
            <span>
            {
                routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))
            }	
            </span>		
        </Router>
    )
}
export default RouteConf
