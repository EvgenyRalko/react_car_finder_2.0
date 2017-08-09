'use strict';

import React from 'react';
import {Link} from 'react-router';

import './register.less';


export default class Registration extends React.Component {

    render() {

        return (
            <div className="register wrapper">

                {/* REGISTRATION FORM  */}
                <form className="form-signin" name="registrationForm" onSubmit = { this.onSubmit.bind(this) } >

                    <h2 className="form-signin-heading">Coworkio</h2>

                    {/* EMAIL */}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" ref="email" required="required"/>
                    </div>

                    {/* PASSWORD */}
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" ref="password" required="required"/>
                    </div>

                    {/* NAME */}
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" ref="name" required="required"/>
                    </div>

                    {/* SURNAME */}
                    <div className="form-group">
                        <label>Surname</label>
                        <input  className="form-control" ref="surname" required="required"/>
                    </div>

                    <button type="submit" className="btn btn-lg btn-outline-reverse btn-block">Sign Up</button>
                    Already have account? <Link to="/login">Login</Link>
                </form>

            </div>
        )
    }

    onSubmit(e){
        e.preventDefault();

        const data = {
            firstName: this.refs.name.value,
            lastName: this.refs.surname.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        };

        this.props.onSubmit( data );
    }
}

Registration.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};