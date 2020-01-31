import React from 'react';

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
        </React.Fragment>
    );
};

export default Login;