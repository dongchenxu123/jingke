import React from 'react'
import {
  HashRouter as Router,
  Route, Link
 } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'; 
import {routes} from './config'

const SubMenu = Menu.SubMenu;

//router配置的是二维数组，这里处理的是外层部分
class RouteConf extends React.Component {
    render() {
        const self = this;
        const RouteWithSubRoutes = (route) => (
            <Route 
                exact={route.exact} 
                path={route.path} 
                render={props => {
                    return(<route.component {...props} routes={route.routes} />)
            }}/>
        )
        return (
                <Router> 
                    <span>             
                    {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}	

                        </span>		
                </Router>
            )
	}
}


export default RouteConf
