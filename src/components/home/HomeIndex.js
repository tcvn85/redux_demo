import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component{
	constructor(props){
		super();
	}
	render(){
		return(
			<h1>Homepage</h1>
		);
	}
}

export default withRouter(Home);