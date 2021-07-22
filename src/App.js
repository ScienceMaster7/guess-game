import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <Router>
      <footer className="footer">
        <div className="footer__iconContainer">
          <Link className="footer__iconContainer__link" to="/age">
            AGE
          </Link>
        </div>
        <div className="footer__iconContainer">
          <Link className="footer__iconContainer__link" to="/country">
            <FontAwesomeIcon icon={faFlag} />
          </Link>
        </div>
        <div className="footer__iconContainer">
          <Link className="footer__iconContainer__link" to="/gender">
            <FontAwesomeIcon icon={faVenusMars} />
          </Link>
        </div>
      </footer>
      <Switch>
        <Route path="/country">
          <Country />
        </Route>
      </Switch>
      <Switch>
        <Route path="/gender">
          <Gender />
        </Route>
      </Switch>
      <Switch>
        <Route path="/age">
          <Age />
        </Route>
      </Switch>
    </Router>
  );
}

function Country() {
  return (
    <div className="App">
      <header className="header">
        <form className="header__form">
          <input
            className="form__input"
            type="text"
            placeholder="Guess your Country"
            autoComplete="off"
          />
          <button className="form__button">Go</button>
        </form>
      </header>
      <main className="content">
        <section className="content__output"></section>
      </main>
    </div>
  );
}

function Gender() {
  return (
    <div className="App">
      <header className="header">
        <form className="header__form">
          <input
            className="form__input"
            type="text"
            placeholder="Guess your Gender"
            autoComplete="off"
          />
          <button className="form__button">Go</button>
        </form>
      </header>
      <main className="content">
        <section className="content__output"></section>
      </main>
    </div>
  );
}

function Age() {
  return (
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
    </div>
  );
}
export default App;
