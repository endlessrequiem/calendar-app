import React, { useReducer } from "react";
import axios from "axios";
import AuthProvider from "./AuthContext";
import FirebaseReducer from "./firebaseReducer";
import { LOG_IN } from "../types";

const FirebaseState = props => {
  const initialState = {
    user: "",
    loading: false
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  // Sign in users
  const logInUser = async text => {
    const res = await axios.get("");



    dispatch({
      type: LOG_IN,
      payload: res.data.items
    });
  };

  return (
    <AuthProvider
      value={{
        users: state.users,
        loading: state.loading,
        signInUsers
      }}
    >
      {props.children}
    </AuthProvider>
  );
};

export default FirebaseState;
