import React from 'react';
import { Router } from '@reach/router'; 

import HomePage from './components/HomePage';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPw from './components/Auth/ForgotPw';
import Confirm from './components/Auth/Confirm';

const AppRouter = () => {
    return (
        <Router>
            <HomePage path="/" />
            <Auth path="auth">
                <Login path="login" />
                <Register path="register" />
                <ForgotPw path="forgot" />
                <Confirm path="confirm" />
            </Auth>
            <Profile path="profile" />
        </Router>
    )
}

export default AppRouter;