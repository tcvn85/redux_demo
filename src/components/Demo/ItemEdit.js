import React from 'react';
import { withRouter } from 'react-router-dom';

class ItemEdit extends React.Component {
	render() {
		return (
			<div className="edit-user">
				<h1>Edit User</h1>
				<div className="form-group">
					<label>Username</label>
					<input name="username" />
				</div>
				<div className="form-group">
					<label>Email</label>
					<input name="Email" />
				</div>
				<div className="button-actions">
					<button type="submit">Save</button>
				</div>
			</div>
		);
	}
}

export default withRouter(ItemEdit);