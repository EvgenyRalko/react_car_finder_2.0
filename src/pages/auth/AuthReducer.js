import * as Actions  from './AuthActions';

const INITIAL_STATE = {
    isPending: false
};

const auth = (state = INITIAL_STATE, action) => {

    switch( action.type ){

        case  `${Actions.LOGIN_USER}_PENDING`:
            return Object.assign({}, state, {
                isPending: true
            });
            break; 

        case `${Actions.LOGIN_USER}_FULFILLED`:
            return Object.assign({}, state, {
                isPending: false,
                token: action.payload.data.token,
                error: null
            });
            break;

        case `${Actions.LOGIN_USER}_REJECTED` :
            return Object.assign({}, state, {
                isPending: false,
                token: null,
                error: action.payload.data
            });
            break;

        case `${Actions.REGISTER_USER}_PENDING` :
            return Object.assign({}, state, {
                isPending: true
            });
            break;

        case `${Actions.REGISTER_USER}_FULFILLED` :
            return Object.assign({}, state, {
                isPending: false,
                isSucceeded: action.payload.data
            });
            break;

        case `${Actions.REGISTER_USER}_REJECTED` :
            return Object.assign({}, state, {
                isPending: false,
                isSucceeded: action.payload.message
            });
            break;

        default:
            return state;
    }

};

export default auth;