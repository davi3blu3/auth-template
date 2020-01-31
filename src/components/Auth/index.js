import React from 'react';

import Register from './Register';
import Login from './Login';
import ForgotPw from './ForgotPw';
import Confirm from './Confirm';

const Auth = () => {
  return (
    <div>
      <Register />
      <Login />
      <ForgotPw />
      <Confirm />
    </div>
  );
}

export default Auth;