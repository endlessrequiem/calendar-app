import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import app from "../../firebase";



function Login( {history} ) {
    const handleLogin = useCallback(async (event) => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app.auth().signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        }  catch (error) {
            alert(error);
        }
    }, [history]);


    return (
        <div>
            <form>
                <label>
                    Email:
                <input name="email" type="email"/>

                </label>
                <label>
                    Password:
                    <input name="password" type="password"/>
                </label>
            </form>
        
        <div className="SignUp">
            <h1>Not Crackalackin yet?</h1>
            <h2>Sign in here:</h2>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
        </div>
    );
}
export default Login;