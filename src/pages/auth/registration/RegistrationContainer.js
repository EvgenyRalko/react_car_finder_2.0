import React from 'react';
import {connect} from 'react-redux'; 
import Registration from './Registration';
import {registerUser} from '../AuthActions';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (credentials) =>  {
            dispatch( registerUser( credentials ) )
        }
    }
};

export default connect(null, mapDispatchToProps)(Registration);