import React, { useCallback } from "react";
import app from "../../firebase";



function Login({history}) {
    const handleLogin = useCallback(async (event) => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app.auth().signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch(error) {
            alert("Error logining in: ", error);
        }
    }
    );


    return(
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
        </div>
    );
}


export default Login;