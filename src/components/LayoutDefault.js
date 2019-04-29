import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './home/HomeIndex';
import DemoList from './Demo/ItemIndex';
import DemoCreate  from './Demo/ItemCreate';
import DemoEdit  from './Demo/ItemEdit';


export default class LayoutDefault extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<header>
					<nav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/demos">Demo</Link></li>
							<li><Link to="/demo-create">Create Demo</Link></li>
						</ul>
					</nav>
				</header>
				<div>
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/demos" component={DemoList} />
						<Route exact path="/demo-create" component={DemoCreate} />
						<Route exact path="/demo-edit/:id" component={DemoEdit} />
					</Switch>
				</main>
				</div>
			</div>
		);
	}
}