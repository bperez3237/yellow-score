import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "../index.css";
import Home from "./Home";
import Page from "./Page";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        {/* <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/page/:id" component={Page} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);