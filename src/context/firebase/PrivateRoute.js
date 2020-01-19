import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "./AuthContext"

function PrivateRoute({component: RouteComponent, ...rest}) {
    const authContext = useContext(AuthContext);
    console.log("current user in private route: ", authContext.currentUser);
    console.log("route componenet: ", RouteComponent,);


  
    return (

    <Route {...rest} render={routerProps => 
       // checkAuthentication()
        !!authContext.currentUser ? (
        <RouteComponent {...routerProps}/> 
        ) : (
        <Redirect to={"/login"}/>
        )

        }
        
        />

);
}

export default PrivateRoute;