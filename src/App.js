import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <input
            className="header__input"
            type="text"
            placeholder="Guess your age"
            autoComplete="off"
          />
        </header>
        <main className="content">
          <section className="content__output"></section>
        </main>
        <footer className="footer">
          <div className="footer__iconContainer"></div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
