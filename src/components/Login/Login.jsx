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
                    <h6 className="label">knowledge :: time coordination</h6>
                </div>
                <div className="login">
                    <form onSubmit={handleLogin}>
                        <p className="label">email</p>
                        <input
                            name="email"
                            type="email"
                            value={state.email}
                            onChange={updateInput}
                            className="box"/>
                        <p className="label">password</p>
                        <input
                            name="password"
                            type="password"
                            value={state.password}
                            onChange={updateInput}
                            className="box"/>
                        <div>
                            <button className="rounded_btn" type="submit" style={{borderRadius:"8px"}}>log in</button>
                        </div>
                    </form>
                    <hr className="hr"/>
                    <div>
                        <h4 className="label" style={{marginTop:"-20px"}}>not crackalackin yet?</h4>
                        <Link className="rounded_btn" to="/signup">sign up</Link>
                    </div>
                </div>
            </div>
        );
    
}

export default withRouter(Login);
