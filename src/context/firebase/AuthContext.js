import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// function AuthProvider({children}) {
//     const [currentUser, setCurrentUser] = useState(null);
    

//     useEffect(() => {
//         app.auth().onAuthStateChanged(setCurrentUser);
//     }, []);

//     return (
//         <AuthContext.Provider
//         value={{currentUser}}>
//             {children}
//         </AuthContext.Provider>
//     );
// }







// export default AuthProvider;

