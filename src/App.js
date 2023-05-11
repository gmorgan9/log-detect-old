import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import about from './about'; // Import the About component

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Your other content */}
      </main>
    </div>
  );
}

export default App;

