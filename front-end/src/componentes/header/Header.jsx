import React,{useState,useEffect} from 'react';
import CustomModal from "../customModal/CustomModal";

import "./Header.css";

const Header = () => {

  return (
    <header>
            <div className="left-header">            
                <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
                <h4>¿Necesitas un auto? Aca te espera</h4>
            </div>
            <div className="right-header">
              <CustomModal/>
            </div>
    </header>
  )
}

export default Header