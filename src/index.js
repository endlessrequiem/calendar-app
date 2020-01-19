import React from "react";
import ReactDOM from "react-dom";
import FirebaseState from "./context/firebase/FirebaseState";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import PrivateRoute from "./context/firebase/PrivateRoute";
import Calendar from "./components/Calendar/Calendar";
import Day from './components/Calendar/Day';
import Account from "./components/Account/Account";

ReactDOM.render(
  <FirebaseState>
    <Router>
      <PrivateRoute exact path='/calendar' component={Calendar} />
      <PrivateRoute exact path='/account' component={Account} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/day' component={Day} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/' component={Home} />
    </Router>
  </FirebaseState>,
  document.querySelector("#root")
);
