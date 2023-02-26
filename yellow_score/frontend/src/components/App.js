import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";

import "../index.css";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>testing!!!</h1>
        <h2>hi</h2>
      </div>
    );
  }
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);