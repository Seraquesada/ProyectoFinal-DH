import React, { useState } from 'react';
import CustomModal from "../customModal/CustomModal";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Cross as Hamburger } from 'hamburger-react'
import "./sideBarBootstrap.css";
import Button from 'react-bootstrap/Button';
import { useAuthContext } from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

function SideBarBootstrap() {

    const [showCanvas, setShowCanvas] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const {
        wrapperFunctionSignIn,
        wrapperFunctionSignUp,
        loggedIn,
        initials,
        userName,
        logOut,
        rol
    } = useAuthContext()

    const handleCloseCanvas = () => {
        setShowCanvas(false);
        closeCross();
    }

    const handleShowCanvas = () => {
        setShowCanvas(true);
        openCross();
    }
    const [isOpen, setIsOpen] = useState(false);
    const closeCross = () => setIsOpen(false);
    const openCross = () => setIsOpen(true);

    const pathAdmin = location.pathname === "/administracion"
    const pathHome = location.pathname === '/';
    const handleReDirect = () => {
        pathHome ? navigate("/administracion") : navigate("/");
    }


    if (loggedIn) {
        return (
            <>
                <Hamburger toggled={isOpen} toggle={handleShowCanvas} className="me-2 hamburger">
                </Hamburger>
                <Offcanvas show={showCanvas} onHide={handleCloseCanvas} placement={'end'}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Hola, {userName}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="onCanvasBody">
                            <div id="username" className="text-center text-light rounded-circle">{initials}</div>
                        </div>
                        {pathHome && rol === "ROLE_ADMIN" && <Button onClick={handleReDirect} >Crear Producto</Button>}
                        {pathAdmin && rol === "ROLE_ADMIN" && <Button onClick={handleReDirect} >Volver al Inicio</Button>}
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
            <Hamburger toggled={isOpen} toggle={handleShowCanvas} className="me-2 hamburger">
            </Hamburger>
            <Offcanvas placement={'end'} show={showCanvas} onHide={handleCloseCanvas}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Button variant="warning" onClick={wrapperFunctionSignIn}>
                        Ingresar
                    </Button>

                    <Button variant="secondary" onClick={wrapperFunctionSignUp}>
                        Registrate
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBarBootstrap;