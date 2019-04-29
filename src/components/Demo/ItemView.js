import React from 'react';
import { withRouter } from 'react-router-dom';

class ItemView extends React.Component {
	render() {
		return (
			<div className="demo-view">
				<h1>View Item #</h1>
				
			</div>
		);
	}
}

export default withRouter(ItemView);