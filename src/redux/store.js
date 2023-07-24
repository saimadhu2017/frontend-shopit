import { combineReducers, createStore } from 'redux';
import { updateUserSignedIn } from './session/sessionReducer'

const reducers = combineReducers({ updateUserSignedIn })
const store = createStore(reducers);

export default store;