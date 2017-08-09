import {combineReducers} from 'redux';

import auth from '../pages/auth/AuthReducer';

const reducers = combineReducers({ auth });

export default reducers;
