import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer, userReducer, userDetailsReducer } from './Reducer/userReducer';
import { courseReducer } from './Reducer/courseReducer';


const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    userDetails: userDetailsReducer,
    course: courseReducer
});

const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;