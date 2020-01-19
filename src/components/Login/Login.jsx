import React, { useContext, useState } from "react";
import {AuthContext} from "../../context/firebase/AuthContext";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import "./Login.css";


function Login({history}) {
    const [state, updateState] = useState({email: "", password: ""});

    function updateInput(event) {
        const {name, value} = event.target;
        console.log("event: ", event);
        console.log(state.email, state.password);

        updateState(prevState => ({...prevState, [name]: value}));
        console.log("this should be the email: ", state.email);
    }

    function handleLogin(event) {
        event.preventDefault();
        console.log(state);
        console.log("email?: ", state.email);
        console.log("password?: ", state.password);
        authContext.LogInUser(state.email, state.password);
        history.push("/");

    }


  const authContext = useContext(AuthContext);
        return(
            <div className="login container">
                <div className="banner">
                    <h1 style={{textAlign:"center"}}>freetyme</h1>
                    <p className="label">knowledge :: time coordination</p>
                </div>
                <div className="login">
                    <form onSubmit={handleLogin}>
                        <p className="label">email</p>
                        <input
                            name="email"
                            type="email"
                            value={state.email}
                            onChange={updateInput}
                            className="textbox"/>
                        <p className="label">password</p>
                        <input
                            name="password"
                            type="password"
                            value={state.password}
                            onChange={updateInput}
                            className="textbox"/>
                        <div>
                            <button 
                                className="button" type="submit">log in</button>
                        </div>
                    </form>
                    <div className="SignUp">
                        <h4 className="label" style={{marginTop:"80px"}}>not crackalackin yet?</h4>
                        <Link className="button" to="/signup">sign up</Link>
                    </div>
                </div>
            </div>
        );
    
}

export default withRouter(Login);
