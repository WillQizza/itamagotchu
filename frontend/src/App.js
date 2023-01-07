import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the main page :0
        </p>

        <form>
          <label>
            Name:
            <input type="text" name="name"></input>
            <input type="submit" value="Submit"></input>
          </label>
        </form>
      </header>
    </div>
  );
}


export default App;
