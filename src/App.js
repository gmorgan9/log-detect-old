import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to my website</h1>
        <section>
          <h2>Login</h2>
          <form>
            <label>
              Username:
              <input type="text" />
            </label>
            <br />
            <label>
              Password:
              <input type="password" />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;

