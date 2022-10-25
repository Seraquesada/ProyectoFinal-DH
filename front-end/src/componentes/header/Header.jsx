import React,{useState,useEffect} from 'react';
import CustomModal from "../customModal/CustomModal";

import "./Header.css";

const Header = () => {

  return (
    <header className="bg-dark">
            <div className="left-header">            
                <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
                <h4 className="text-light">¿Necesitas un auto?</h4>
            </div>
            <div className="right-header">
              <CustomModal/>
            </div>
    </header>
  )
}

export default Header