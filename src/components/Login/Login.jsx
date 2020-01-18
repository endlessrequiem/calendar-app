import React, { useContext } from "react";
import {AuthContext} from "../../context/firebase/AuthContext";


 

function Login({history}) {
    
  const authContext = useContext(AuthContext);

    return(
        <div>
            <form onSubmit={authContext.LogInUser(history)}>
                <label>
                    Email:
                <input name="email" type="email"/>

                </label>
                <label>
                    Password:
                    <input name="password" type="password"/>
                </label>
                <button type="submit">LogIn</button>
            </form>
        </div>
    );
}


export default Login;