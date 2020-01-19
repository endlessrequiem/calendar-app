import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter, history } from "react-router";
import app from "../../firebase";
import { FirebaseContext } from "../../firebase";
import "./SignUp.css";

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

    return (
        <div className="login container">
            <div className="banner">
                <h1 style={{textAlign:"center"}}>freetyme</h1>
                <h3 style={{textAlign:"center"}}>create an account</h3>
            </div>

            <div className="signup">
                <form onSubmit={handleSignUp}>
                        <p className="label">enter your email</p>
                        <input
                            name="email"
                            value={state.email}
                            onChange={updateInput}
                            type="text"
                            className="textbox"/>

                        <p className="label">choose a password</p>
                        <input
                            name="password"
                            value={state.password}
                            onChange={updateInput}
                            type="password"
                            className="textbox"/>

                        <div>
                            <button className="button" type="submit">sign up </button> 
                        </div>
                        <hr className="hr"/>
                        <div>
                            <h4 className="label" style={{marginTop:"-20px"}}>mistakes were made</h4>
                            <Link className="button" to="/login">go back</Link>
                        </div>
                </form>
            </div>
        </div>
     );
}

export default SignUp;