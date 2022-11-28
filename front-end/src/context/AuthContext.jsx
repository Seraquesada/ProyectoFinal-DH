import React,{ createContext,useState,useContext } from "react";

export const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext) 

export const AuthContextProvider = ({children}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
    <AuthContext.Provider value={{show,handleShow,handleClose}}>
        {children}
    </AuthContext.Provider>
    )
}
