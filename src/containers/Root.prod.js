import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Routes from '../routes/index'


// Render the main component into the dom
export default class Root extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
			    <div>
			      <Routes />
			    </div>
	  		</Provider>
  		)
	}
}