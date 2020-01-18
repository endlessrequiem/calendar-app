import React from "react";
import ReactDOM from "react-dom";
import FirebaseState from "./context/firebase/FirebaseState";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import PrivateRoute from "./context/firebase/PrivateRoute";



const Index = () => {
  return <div>Index</div>;
};

ReactDOM.render(
  <FirebaseState>
    <Router>
      <PrivateRoute exact path='/' component={Index} />
      <Route exact path="/" component={Login} />
      <Redirect to='/' />
    </Router>
  </FirebaseState>,
  document.querySelector("#root")
);
