import React, { useContext, useState } from "react";
import {AuthContext} from "../../context/firebase/AuthContext";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";






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
        <div>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                <input name="email" type="email" value={state.email} onChange={updateInput}/>

                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={state.password} onChange={updateInput}/>
                </label>
                <button type="submit">LogIn</button>
            </form>
        
        <div className="SignUp">
            <h1>Not Crackalackin yet?</h1>
            <h2>Sign in here:</h2>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
        </div>
    );
}


export default withRouter(Login);
