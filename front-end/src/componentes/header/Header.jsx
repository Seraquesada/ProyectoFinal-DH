import React from 'react';
import CustomModal from "../customModal/CustomModal";
import Button from 'react-bootstrap/Button';
import SideBarBootstrap from '../sideBarBootsStrap/SideBarBootstrap';
import "./Header.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {
    loggedIn,
    initials,
    userName,
    logOut,
    rol
  } = useAuthContext()

  const pathHome = location.pathname === '/';
  const pathAdmin = location.pathname === "/administracion"

  const handleReDirect = () => {
    pathHome ? navigate("/administracion") : navigate("/");
  }

  if (loggedIn) {
    return (
      <header className="bg-dark">
        <div className="left-header">
          <Link to="/">
            <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
          </Link>
          <Link to="/">
            <h4 className="text-light">¿Necesitas un auto?</h4>
          </Link>
        </div>

        <div className="right-header-login">
          <p className="loggedUserName">Hola, {userName}</p>
          <div id="username" className="text-center text-light rounded-circle">{initials}</div>
          {!pathAdmin && rol === "ROLE_ADMIN" && <Button onClick={handleReDirect} >Crear Producto</Button>}
          {pathAdmin && rol === "ROLE_ADMIN" && <Button onClick={handleReDirect} >Volver a Inicio</Button>}
          <Button variant="warning" onClick={logOut}>
            Cerrar Sesión
          </Button>
        </div>
        <SideBarBootstrap />
      </header>
    )
  }
  return (
    <header className="bg-dark ">
      <div className="left-header">
        <Link to="/">
          <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
        </Link>
        <Link to="/">
          <h4 className="text-light">¿Necesitas un auto?</h4>
        </Link>
      </div>


      <div className="right-header">
        <CustomModal />
      </div>
      <SideBarBootstrap placement={"end"} />
    </header>
  )
}

export default Header