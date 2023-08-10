import { combineReducers, createStore } from 'redux';
import { updateUserSignedIn } from './session/sessionReducer'
import { updateShowLoader } from './loader/loaderReducer'

const reducers = combineReducers({
    updateUserSignedIn,
    updateShowLoader
})
const store = createStore(reducers);

export default store;