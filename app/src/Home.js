import React from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my test site! This site was last modified on 8/30/20 9:38pm
        </p>
        <p>
          Wenonah test! Please work! Come on, work! What About Now? Last try? :) Work! Okay. what about now? Force windows, now??
        </p>
        <a
          className="App-link"
          href="/shoppingList/"
        >
          Let's try some functions!
        </a>
        <a 
          className="App-link"
          href="/about/"
        >
        Gated content
        </a>
		        <a 
          className="App-link"
          href="/.auth/login/facebook"
        >
        Log in with Facebook
        </a>

      </header>
    </div>
  );
}

export default Home;
