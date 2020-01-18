import React, { useCallback,useReducer, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import FirebaseReducer from "./firebaseReducer";
import { LOG_IN, UPDATE_USER } from "../types";
import app from "../../firebase";

const FirebaseState = props => {
  const initialState = {
    currentUser: "",
    loading: false
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);
  

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      console.log("use effect", user);
      if (user) {
        dispatch({
          type: LOG_IN,
          payload: user
        });
      }
    });

  }, []);

  // Sign in users
const LogInUser = (history) => {


    const handleLogin = useCallback(async (event) => {
      event.preventDefault();
      const {email, password} = event.target.elements;
      try {
          await app.auth().signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
      } catch(error) {
          alert("Error logining in: ", error);
      }
     }, [history]
    );

      // dispatch({
      //   type: LOG_IN,
      //   payload: ""
      // });
  };


  const AuthProvider = (props) => {

  }


  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        loading: state.loading,
        LogInUser

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default FirebaseState;
