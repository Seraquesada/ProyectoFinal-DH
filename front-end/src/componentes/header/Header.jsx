import React,{useState,useEffect} from 'react';
import CustomModal from "../customModal/CustomModal";
import Button from 'react-bootstrap/Button';
import SideBarBootstrap from '../sideBarBootsStrap/SideBarBootstrap';
import "./Header.css";
import {Link} from 'react-router-dom';

const Header = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('username'));
  
  const logOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('username');
    setLoggedIn(false)
  }
  const logIn = () => {
    setLoggedIn(true)
  }

  const isLoggedIn = () => {
    if(localStorage.getItem('jwt')){
      setLoggedIn(true)
    }
  }
  
  useEffect(()=>{
    isLoggedIn();
  },[])

  if(loggedIn){
    return (
      <header className="bg-dark mb-4">
        <div className="left-header">   
        <Link to="/">      
            <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
        </Link>
        <Link to="/"> 
            <h4 className="text-light">¿Necesitas un auto?</h4>
        </Link>
        </div>
        
        <div className="right-header-login">
          <div id="username" className="text-center text-light rounded-circle">{userName}</div>
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
        <Link to="/">           
          <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
        </Link>
        <Link to="/"> 
          <h4 className="text-light">¿Necesitas un auto?</h4>
        </Link>
      </div>
            

      <div className="right-header">
        <CustomModal logIn={logIn} setUserName={setUserName}/>
      </div>
      <SideBarBootstrap logIn={logIn} setUserName={setUserName} placement={"end"}/>
    </header>
  )
}

export default Header