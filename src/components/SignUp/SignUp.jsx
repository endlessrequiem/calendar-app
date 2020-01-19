import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter, history } from "react-router";
import app from "../../firebase";
import { FirebaseContext } from "../../firebase";



function SignUp( {history} ) {
    const [state, updateState] = useState({email:"", password:""});
    function updateInput(event) {
        const{name, value} = event.target;
        updateState(prevState => ({...prevState, [name]: value}));
        console.log("Email: ", state.email, "Pass:", state.password);
    }

    function handleSignUp(event){
        event.preventDefault();
        app.auth().createUserWithEmailAndPassword(state.email, state.password).then(() => {
           var user = app.auth().currentUser;
           console.log("User:", user)
           if (user){
               history.push("/");
           }
    }).catch((error) => {
        // An error happened.
        console.log("Error: ", error)
    })
};

    // const handleSignUp = //useCallback(async event => {
    //     event.preventDefault();
    //     try {
    //         console.log("Email: ", state.email, "Pass:", state.password);
    //         await app.auth().createUserWithEmailAndPassword(state.email, state.password);
    //             console.log("After createUser");
    //         history.push("/");
    //     } catch (error) {
    //         alert(error);
    //     }
    // }, [history]);


    return (
        <div style={{marginTop:"5px",
                    marginBottom:"5px",
                    textAlign:"center"}}>
            <meta name="viewport" content="width-device-width, initial-scale=1.0"></meta>
            <h2>The Crackalackin Sign Up via Google</h2>
            <form onSubmit={handleSignUp}>
                    <p style={{marginTop:"5px",
                                marginBottom:"5px",
                                textAlign:"center"}}>Gmail</p>
                    <input
                        name="email"
                        value={state.email}
                        onChange={updateInput}
                        type="text"
                        placeholder="Gmail Account"/>

                    <p style={{marginTop:"15px",
                            marginBottom:"5px",
                            textAlign:"center"}}>Password</p>
                    <input
                        name="password"
                        value={state.password}
                        onChange={updateInput}
                        type="password"
                        placeholder="Password"/>

                    <p style={{marginTop:"5px", marginBottom:"5px"}}>
                        <button type="submit" style={{width:"230px"}}>Sign Up </button> 
                    </p>
            </form>
        </div>
     );
}

export default SignUp;