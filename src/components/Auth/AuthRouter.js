import React from 'react';
import { Router } from '@reach/router'; 

import Register from './Register';
import Login from './Login';
import ForgotPw from './ForgotPw';
import Confirm from './Confirm';


const AuthRouter = () => {
    return (
        <Router>
            <Register path="register" />
            <Login path="login" />
            <ForgotPw path="forgot" />
            <Confirm path="confirm" />
        </Router>
    )
}

export default AuthRouter;