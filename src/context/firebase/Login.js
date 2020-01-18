import React, { useCallback } from "react";



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
            <h1>Login Page</h1>
        </div>
    );
}
