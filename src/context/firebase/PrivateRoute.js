import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "./AuthContext"


function PrivateRoute({component: RouteComponent, ...rest}) {
    const authContext = useContext(AuthContext);

    return (<Route {...rest} render={routerProps => 
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