import React, { useState } from 'react';
import CustomModal from "../customModal/CustomModal";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Cross as Hamburger } from 'hamburger-react'
import "./sideBarBootstrap.css";
import Button from 'react-bootstrap/Button';
import { useAuthContext } from '../../context/AuthContext';

function SideBarBootstrap() {
    
    const [show, setShow] = useState(false);
    
    const {
        loggedIn,
        initials,
        userName,
        logOut,
    } = useAuthContext()

    const handleClose = () => {
        setShow(false);
        closeCross();
    }
    
    const handleShow = () => {
        setShow(true);
        openCross();
    }
    const [isOpen, setIsOpen] = useState(false);
    
    const closeCross = () => setIsOpen(false);
    const openCross = () => setIsOpen(true);


if(loggedIn){
    return(
        <>
        <Hamburger toggled={isOpen} toggle={handleShow} className="me-2 hamburger">
        </Hamburger>
        <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Hola, {userName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="onCanvasBody">
            <div id="username" className="text-center text-light rounded-circle">{initials}</div>
            </div>
            <Button variant="warning" onClick={logOut}>
                Cerrar Sesión
            </Button>
        </Offcanvas.Body>
        </Offcanvas>
        </> 
    );
}
return (
    <>
    <Hamburger toggled={isOpen} toggle={handleShow} className="me-2 hamburger">
    </Hamburger>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <CustomModal />
        </Offcanvas.Body>
    </Offcanvas>
    </>
    );
}

export default SideBarBootstrap;