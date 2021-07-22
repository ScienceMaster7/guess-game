import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Country from "./components/Coutry";
import Gender from "./components/Gender";
import Age from "./components/Age";

function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/gender">
            <Gender />
          </Route>
          <Route path="/age">
            <Age />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Please Go to the Age, Gender or Country page !</h1>;
}

export default App;
