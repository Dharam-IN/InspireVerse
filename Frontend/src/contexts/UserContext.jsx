import { createContext, useState } from "react";

export const isAuthorizedContext = createContext({
    isAuthorized: false,
    setisAuthorized: () => {}
})

export const IsAuthorizedContextProvider = ({children}) => {
    const [isAuthorized, setisAuthorized] = useState(false);
    const [user, setUser] = useState();

    return(
        <isAuthorizedContext.Provider value={{isAuthorized, setisAuthorized, user, setUser}}>
            {children}
        </isAuthorizedContext.Provider>
    )
}