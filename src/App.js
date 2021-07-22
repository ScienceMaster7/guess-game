import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <form className="header__form">
            <input
              className="form__input"
              type="text"
              placeholder="Guess your age"
              autoComplete="off"
            />
            <button className="form__button">Go</button>
          </form>
        </header>
        <main className="content">
          <section className="content__output"></section>
        </main>
        <footer className="footer">
          <div className="footer__iconContainer">
            <p>AGE</p>
          </div>
          <div className="footer__iconContainer">
            <FontAwesomeIcon icon={faFlag} />
          </div>
          <div className="footer__iconContainer">
            <FontAwesomeIcon icon={faVenusMars} />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
