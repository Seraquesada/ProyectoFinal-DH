import React,{useState,useEffect} from 'react';
import CustomModal from "../customModal/CustomModal";
import Button from 'react-bootstrap/Button';
import SearchBar from "../searchBar/SearchBar";

import "./Header.css";

const Header = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Juan");
  const logOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false)
  }
  const logIn = () => {
    setLoggedIn(true)
  }
  if(loggedIn){
    return (
      <header className="bg-dark">
              <div className="left-header">         
                  <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
                  <h4 className="text-light">¿Necesitas un auto?</h4>
              </div>
              <SearchBar/>
              <div className="right-header">
                <div id="username" className="text-center text-light">{userName}</div>
                <Button variant="warning" onClick={logOut}>
                  Cerrar Sesión
                </Button>
              </div>
      </header>
    )
  }
  return (
    <header className="bg-dark mb-4">
            <div className="left-header">            
                <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
                <h4 className="text-light">¿Necesitas un auto?</h4>
            </div>
            
            <SearchBar/>
            <div className="right-header">
              <CustomModal logIn={logIn} setUserName={setUserName}/>
            </div>
    </header>
  )
}

export default Header