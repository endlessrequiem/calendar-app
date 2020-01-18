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
        <div style={{marginTop:"5px",
                    marginBottom:"5px",
                    textAlign:"center"}}>
        <meta name="viewport" content="width-device-width, initial-scale=1.0"></meta>
        <h2>The Crackalackin Sign Up via Google</h2>
        <form onSubmit={handleSignUp}>
            <label>
                <p style={{marginTop:"5px",
                            marginBottom:"5px",
                            textAlign:"center"}}>Gmail</p>
                <input name="email" type="email" placeholder="Gmail Account" />
            </label>
            <br />
            <label>
            <p style={{marginTop:"15px",
                        marginBottom:"5px",
                        textAlign:"center"}}>Password</p>
                <input name="password"
                    type="password"
                    placeholder="Password"
                    style={{width:"230px"}}/>
            </label>
            <p style={{marginTop:"5px", marginBottom:"5px"}}>
            <button type="submit" style={{width:"230px"}}>Sign Up </button> 
            </p>
        </form>
        </div>
     );
}
export default SignUp;