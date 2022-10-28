import React, { useState } from 'react';
import CustomModal from "../customModal/CustomModal";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Cross as Hamburger } from 'hamburger-react'
import "./sideBarBootstrap.css";
function SideBarBootstrap({ name,logIn,setUserName, ...props }) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
    <>
    <Hamburger variant="warning" onToggle={handleShow} className="me-2 hamburger">
        {name}
    </Hamburger>
    <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <CustomModal logIn={logIn} setUserName={setUserName}/>
        </Offcanvas.Body>
    </Offcanvas>
    </>
    );
}

export default SideBarBootstrap;