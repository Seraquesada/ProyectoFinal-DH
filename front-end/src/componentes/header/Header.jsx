import React,{useState,useEffect} from 'react'

import "./Header.css";

const Header = () => {



    //TODO cambiar logo
  return (
    <header>
            <div className="left-header">            
                <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
                <h4>¿Necesitas un auto? Aca te espera</h4>
            </div>
            <div className="right-header">
                <button>Iniciar Sesion</button>
                <button>Crear Cuenta</button>
            </div>
    </header>
  )
}

export default Header