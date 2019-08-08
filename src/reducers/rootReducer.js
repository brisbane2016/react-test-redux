import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import listReducer from './listReducer';

export default combineReducers({
 simpleReducer,
 listReducer
});