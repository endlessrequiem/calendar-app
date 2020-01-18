import React from "react";
import ReactDOM from "react-dom";
import FirebaseState from "./context/firebase/FirebaseState";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const Index = () => {
  return <div>Index</div>;
};

ReactDOM.render(
  <FirebaseState>
    <Router>
      <Route exact path='/' component={Index} />
      <Redirect to='/' />
    </Router>
  </FirebaseState>,
  document.querySelector("#root")
);
