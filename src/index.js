import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Button variant="primary">Primary</Button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
