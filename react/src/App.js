import React from "react";
import logo from './images/logo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
  
      <p className="navgator">
        <a href="/" className="nav-btn">
           Home
        </a>|
        <a href="/Work" className="nav-btn">
          Work
        </a>
      </p>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{fontSize:20}}>WELCOME TO DEMO PROJECT: WYVERN 05</h1>
        <p className="subTitle">This is the demonstration project of Rest API functionality, designed by Sankar Naredla</p>
        
        <div className="sub">
        <p>
          Easy Access
        </p>
        <p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/sankar-n0863/"
        >
          LinkedIn
        </a>
          
        <a
          className="App-link"
          href="https://github.com/sankarn0863"
        >
          GitHub
        </a>
       
        <a
          className="App-link"
          href="https://cs.newpaltz.edu/~naredlav1/Portfolio/"
        >
          Portfolio
        </a>

</p>
</div>

      </header>
    </div>
  );
}

export default App;
