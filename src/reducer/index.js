import { combineReducers } from "redux";
import fetchReducer from './fetchReducer';
import setReducer from './setReducer';

export default combineReducers({
    fetch: fetchReducer,
    set: setReducer
})