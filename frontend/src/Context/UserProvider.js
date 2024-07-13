import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider ({children}) {
    const defaultValue = JSON.parse(localStorage.getItem("user")) || null;
    const [user, setUser] = useState(defaultValue);

    useEffect(() => {
        if(user) {
            localStorage.setItem("user", JSON.stringify(user));
        }
        else {
            localStorage.removeItem("user");
        }
    }, [user])

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}