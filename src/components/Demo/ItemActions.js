export function fetchData() {
	return (dispatch)	=> {
			
		dispatch({
			type: 'FETCHING_DATA'
		});

		//CALL API
		new Promise( (resolve, reject) => {
			setTimeout( () => {
				const items = localStorage.getItem('ITEMS');
				if (items){
					resolve(JSON.parse(items));	
				};
			}, 300);
		})
		.then( response => {
			dispatch({
				type: 'FETCHING_DATA_SUCCESS',
				data: response
			});
		})
		.catch( error => {
			console.log(error);
			dispatch({
				type: 'FETCHING_DATA_FAILURE'
			});
		});
	};
}


export function addData() {
	return (dispatch)	=> {
		dispatch({
			type: 'FETCHING_DATA'
		});

		// CALL API
		
	};
}
