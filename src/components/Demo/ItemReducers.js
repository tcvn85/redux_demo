// import Types from './ItemTypes';

const initialState = {
	items: [],
	isFetching: false,
	isError: false
};


export default function itemReducers(state = initialState, action) {
	switch (action.type) {
		case 'FETCHING_DATA':
			return {
				...state,
				isFetching: true,
				isError: false
			}

		case 'FETCHING_DATA_SUCCESS':
			return {
				...state,
				items: action.data,
				isFetching: false,
				isError: false
			}
		case 'FETCHING_DATA_FAILURE':
			return {
				...state,
				isFetching: false,
				isError: true
			}

		default: 
			return state;
	}
}


