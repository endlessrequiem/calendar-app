import React, { useCallback,useReducer, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import FirebaseReducer from "./firebaseReducer";
import { LOG_IN, UPDATE_USER, CURRENT_USER_ID, CURRENT_EVENT_ID} from "../types";
import app from "../../firebase";
import { AccountIcon } from "../../components/Icons/Icons";

const FirebaseState = props => {
  const initialState = {
    currentUser: "",
    currentUserId: "",
    currentEventId: "",
    loading: false

  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);
  

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
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
           app.auth().signInWithEmailAndPassword(email, password).then((data) => {
            console.log("userId", data.user.uid);
            //getNumberOfEvents(data.user.uid);
            dispatch({
              type: CURRENT_USER_ID,
              payload: data.user.uid
            });
    
           }).catch((error) => {
            console.log("Error logging in: ", error);
           });
        
       
      } catch(error) {
        console.log("error: ", error);
          alert("Error logining in: ", error);
          
      }
let user = app.auth().currentUser;
    //  console.log("user id ", user.uid);
    //   dispatch({
    //     type: CURRENT_USER_ID,
    //     payload: user.uid
    //   });



     }


    function getNumberOfEvents(userId) {

     // var userId = app.auth().currentUser.uid;
    return app.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var id = snapshot.val();//(snapshot.val() && snapshot.val().username) || 'Anonymous';
    let numberOfEvents = Object.keys(id).length;

           dispatch({
               type: CURRENT_EVENT_ID,
               payload: numberOfEvents
             });

    });



      // let events = app.database().ref("users/" + userId);
      // events.once("value").then((snapshot) => {
      //   console.log("the values from the database: ", snapshot.val());
     

      //       }).catch((error) => {
      //         console.log("Error getting number of values: ", error);
      //       });
      
    }
     

    


  


  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        loading: state.loading,
        LogInUser,
        getNumberOfEvents,
        currentUserId: state.currentUserId,
        currentEventId: state.currentEventId

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default FirebaseState;
