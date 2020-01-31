import React from 'react';
import { Router } from '@reach/router'; 

import HomePage from './components/HomePage';
import Auth from './components/Auth';
import Profile from './components/Profile';

const AppRouter = () => {
    return (
        <Router>
            <HomePage path="/" />
            <Auth path="auth" />
            <Profile path="profile" />
        </Router>
    )
}

export default AppRouter;