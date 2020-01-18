import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import app from "../../firebase";



function SignUp( {history} ) {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.tartget.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);


    return (
        <div>
        <h2>The Crackalackin Sign Up via Google</h2>
        <form onSubmit={handleSignUp}>
            <label>
                <p style={{marginTop:"5px", marginBottom:"5px"}}>Gmail</p>
                <input name="email" type="email" placholder="Gmail Account" />
            </label>
            <br />
            <label>
                <p>Password</p>
                <input name="password" type="password" placeholder="Password" />
            </label>
            <br />
            <br />
            <button type="submit">Sign Up</button>
        </form>
        </div>
     );
}
export default SignUp;