'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {loginUser} from '../AuthActions';

const mapDispatchToProps = (dispatch) => {
    return  {
        onSubmit: (credentials) =>  {
            dispatch( loginUser( credentials ) )
        } 
    }
};

export default connect(null, mapDispatchToProps)(Login);