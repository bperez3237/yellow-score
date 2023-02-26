import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";

import "../index.css";
import Home from "./Home";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);