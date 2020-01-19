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
      console.log("user above dispatch: ", user);
        dispatch({
          type: LOG_IN,
          payload: user
        });


      
    });

  }, []);

  // Sign in users
const LogInUser = (email, password) => {


  
      // /event.preventDefault();
      
      try {
           app.auth().signInWithEmailAndPassword(email, password);
        
       
      } catch(error) {
        console.log("error: ", error);
          alert("Error logining in: ", error);
          
      }
     }

    let user = app.auth().currentUser;
     console.log("user in handle ", user);
      // dispatch({
      //   type: LOG_IN,
      //   payload: user
      // });



  


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
