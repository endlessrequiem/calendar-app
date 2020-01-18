import React, { useReducer } from "react";
import axios from "axios";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import { SIGN_IN } from "../types";

const FirebaseState = props => {
  const initialState = {
    users: [],
    loading: false
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  // Sign in users
  const signInUsers = async text => {
    const res = await axios.get("");

    dispatch({
      type: SIGN_IN,
      payload: res.data.items
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        signInUsers
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
