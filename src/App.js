import React from 'react';
import { Link } from "@reach/router";
import { Auth } from  'aws-amplify';
import AppRouter from './Router';
import './App.css';

const signOut = () => {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}


const App = () => {
  return (
    <div className="App">
      <header>
        <Link to="/"><button>Home</button></Link>
        <Link to="auth/login"><button>Sign In</button></Link>
        <Link to="profile"><button>My Profile</button></Link>
        <button onClick={signOut}>Sign Out</button>
      </header>
      
      <AppRouter />
    </div>
  );
}

export default App;
