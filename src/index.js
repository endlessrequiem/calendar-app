import React from "react";
import ReactDOM from "react-dom";
import FirebaseState from "./context/firebase/FirebaseState";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import TabBar from "./components/TabBar/TabBar";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import PrivateRoute from "./context/firebase/PrivateRoute";

const Index = () => {
  return <div>Index</div>;
};

ReactDOM.render(
  <FirebaseState>
    <Router>
      <PrivateRoute exact path='/' component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Router>
  </FirebaseState>,
  document.querySelector("#root")
);
