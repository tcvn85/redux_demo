// https://medium.freecodecamp.org/how-to-connect-react-to-redux-a-diagrammatic-guide-d2687c14750a

import { combineReducers } from 'redux';
import DemoReducers from './components/Demo/ItemReducers';

const rootReducer = combineReducers({
	DemoReducers,
});

export default rootReducer;

