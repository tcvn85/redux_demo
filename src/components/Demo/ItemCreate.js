import React from 'react';
import { withRouter } from 'react-router-dom';
import *  as ItemActions from './ItemActions';
import cuid from 'cuid';

class ItemCreate extends React.Component {
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){

	}

	handleSubmit(e){
		e.preventDefault();

		const data = new FormData(e.target);
		
		const items = {
			id: cuid(),
			name: data.get('name'),
			email: data.get('email')
		};


		const itemList = JSON.parse(localStorage.getItem('ITEMS')) || [];		
		itemList.unshift(items);
		localStorage.setItem('ITEMS', JSON.stringify(itemList));
	
		e.target.reset();
		
		this.props.history.push('/demos')

	}

	render() {
		return (
			<div className="demo-item">
				<h1>Create Demo</h1>
				<form  action="#" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Name</label>
						<input name="name" autoComplete="off" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input name="email" autoComplete="off" />
					</div>
					<div className="button-actions">
						<button type="submit">Add new item</button>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(ItemCreate);