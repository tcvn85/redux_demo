import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import *  as ItemActions from './ItemActions';


class ItemIndex extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.fetchData();
	}

	render(){
		const { items, isFetching, isError }  = this.props.data;

		const Rows = items.map( item => {
			return (
				<tr key={item.id}>
					<td>{item.name}</td>
					<td>{item.email}</td>
					<td>
						<Link to={`/demo-view/${item.id}`}> View </Link>| 
						<Link to={`/demo-edit/${item.id}`}> Edit </Link>| 
						 <Link to={`/demo-delete/${item.id}`}> Delete</Link>
					</td>
				</tr>
			)
		});

		return(
			<div className="demo-list">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{Rows}
					</tbody>
				</table>
			</div>
		);
	}
}


function mapStateToProps(state){
	console.log('index items');
	console.log(state);

	return {
		data: state.DemoReducers
	}
}

function mapDispatchToProps(dispatch){
	return {
		fetchData: () => dispatch(ItemActions.fetchData()),
		addData: post => {
			dispatch(ItemActions.addData(post));
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemIndex));