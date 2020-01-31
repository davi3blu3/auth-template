import React from 'react';
import { Link } from '@reach/router';

const Login = () => {
    return (
        <React.Fragment>
            <h2>Log In</h2>
            <form>
            <div>
                <label>Email</label>
                <input type="email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" />
            </div>
            <div>
                <button>Log In</button>
            </div>
            </form>
            <div>
                <Link to="../../auth/register">I don't have an account yet</Link>
            </div>
            <div>
                <Link to="../../auth/forgot">I forgot my password</Link>
            </div>
        </React.Fragment>
    );
};

export default Login;