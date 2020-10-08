import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const CloseIFrame=()=>{
  
  debugger

  window.parent.CloseIFrame()

}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>This is the second application</h1>
        <button onClick={CloseIFrame}><h2>Close Me</h2></button>
        </p>
      </header>
    </div>
  );
}

export default App;
