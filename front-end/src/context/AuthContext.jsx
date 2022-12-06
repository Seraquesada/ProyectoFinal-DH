import React,{ createContext,useState,useContext,useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext) 

export const AuthContextProvider = ({children}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loggedIn, setLoggedIn] = useState(false);
    const [initials, setInitials] = useState(localStorage.getItem('initials'));
    const [userName, setUserName] = useState(localStorage.getItem('username'));
    const [validated, setValidated] = useState(false);
    const [badCredentials, setBadCredentials] = useState(false);
    const [unreachable, setUnreachable] = useState(false);
    const [registeredOK, setRegisteredOK] = useState(false);
    const [originalPasswordPattern, setOriginalPasswordPattern] = useState("");
    const [authMode, setAuthMode] = useState("signin");
    const [mustLogIn, setMustLogIn] = useState(false);
    const [rol,setRol] = useState()


    const wrapperFunctionSignIn = () => {
        setRegisteredOK(false);
        setValidated(false);
        setBadCredentials(false);
        setUnreachable(false);
        setMustLogIn(false);
        setAuthMode("signin");
        handleShow();
    }
    
    const wrapperFunctionSignUp = () => {
        setValidated(false);
        setBadCredentials(false);
        setUnreachable(false);
        setMustLogIn(false);
        setAuthMode("signup");
        handleShow();
    }

    const logOut = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('username');
        localStorage.removeItem('initials');
        setLoggedIn(false)
    }
    const logIn = () => {
        setLoggedIn(true)
    }
    const isLoggedIn = () => {
        if(localStorage.getItem('jwt')){
        setLoggedIn(true);
        setRol(parseJwt(localStorage.getItem('jwt')).rol);
        }
    }
    
    useEffect(()=>{
        isLoggedIn();
    },[])

    const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                setValidated(true);
            }else {
                authMode === "signin" ? iniciarSesion(event) : registrarUsuario(event)
            }
        }
    
        const checkEquals = (e) => {
        let mainPassword = document.getElementById("password").value;
    
        setOriginalPasswordPattern(mainPassword); 
        }
    
        function parseJwt (token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
        }
        


    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
        if(authMode === "signin"){
            document.querySelector("#emailLog").value = "";
            document.querySelector("#passwordLog").value = "";
            setBadCredentials(false)
        }else{
            document.querySelector("#nombre").value = "";
            document.querySelector("#apellido").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#password").value = "";
        }
        setValidated(false);
        setUnreachable(false);
        setRegisteredOK(false);
        }


        const iniciarSesion = (e) => {
        e.preventDefault();
        setRegisteredOK(false);
        let payload = {
            "username": document.querySelector("#emailLog").value,
            "password" : document.querySelector("#passwordLog").value
        }
        
        axios.post('http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/usuarios/authenticate', payload)
        .then(function (response) {
            if(response.status === 200){
                localStorage.setItem('jwt', response.data.jwt);
                const unjwt = parseJwt(localStorage.getItem('jwt'))
                const iniciales = unjwt.apellido.substr(0, 1).toUpperCase() + unjwt.nombre.substr(0, 1).toUpperCase();
                const username = unjwt.nombre.substr(0, 1).toUpperCase()+unjwt.nombre.substr(1);
                localStorage.setItem('initials', iniciales);
                localStorage.setItem('username', username);
                setInitials(iniciales);
                setUserName(username);
                setRol(parseJwt(localStorage.getItem('jwt')).rol)
                handleClose();
                logIn();
            }
        }).catch(function (error) {
            error.code === 'ERR_BAD_REQUEST' ? setBadCredentials(true) : setUnreachable(true);
        });
        
        }
    
        const registrarUsuario = (e) => {
        e.preventDefault();
        let payload = {
            "nombre": document.querySelector("#nombre").value,
            "apellido": document.querySelector("#apellido").value,
            "userName": document.querySelector("#email").value,
            "mail": document.querySelector("#email").value,
            "password" : document.querySelector("#password").value
        }
        axios.post('http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/usuarios', payload)
        .then(function (response) {
            if(response.status === 200){
            setUnreachable(false);
            setAuthMode("signin");
            setRegisteredOK(true);
            setValidated(false);
            setMustLogIn(false);
            }
        }).catch(function (error) {
            if(error.code === 'ERR_BAD_REQUEST'){
            setUnreachable(true);
            }      
        });
        }
    


return (
    <AuthContext.Provider value={
        {   
            show,
            loggedIn,
            initials,
            userName,
            validated,
            badCredentials,
            unreachable,
            registeredOK,
            originalPasswordPattern,
            logOut,
            handleSubmit,
            checkEquals,
            changeAuthMode,
            authMode,
            wrapperFunctionSignIn,
            wrapperFunctionSignUp,
            handleClose,
            handleShow,
            setShow,
            mustLogIn,
            setMustLogIn,
            setAuthMode,
            rol
        }
        }>
        {children}
    </AuthContext.Provider>
    )
}
