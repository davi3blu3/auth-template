import React from 'react';

const Register = () => {
    return (
        <React.Fragment>
            <h2>Register</h2>
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
                    <label>Confirm Password</label>
                    <input type="password" />
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default Register;