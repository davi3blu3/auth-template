import React from 'react';
import { Link } from "@reach/router"
import AppRouter from './Router';
import './App.css';

// components

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/"><button>Home</button></Link>
        <Link to="auth"><button>Sign In / Register</button></Link>
        <Link to="profile"><button>My Profile</button></Link>
        <button>Sign Out</button>
      </header>
      
      <AppRouter />
    </div>
  );
}

export default App;
