import React from 'react';
import {Link} from 'react-router';

import './login.less';

export default class Login extends React.Component {

    render() {

        return (
            <div className="login wrapper">

                {/* REGISTRATION FORM  */}
                <form className="form-signin" name="loginForm" onSubmit = { this.onSubmit.bind(this) } >

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

                    <button type="submit" className="btn btn-lg btn-outline-reverse btn-block">Login</button>
                    Don't have account yet?  <Link to="/register">Sign Up</Link>
                </form>

            </div>
        )
    }

    onSubmit(e){ 
        e.preventDefault();

        const data = {
            email: this.refs.email.value,
            password: this.refs.password.value
        };

        this.props.onSubmit( data );
    }
}

Login.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};