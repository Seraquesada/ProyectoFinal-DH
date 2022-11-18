import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../login/Login';
import "./CustomModal.css";

const CustomModal = ({logIn, setUserName, setInitials}) => {
  const [show, setShow] = useState(false);
  const [authMode, setAuthMode] = useState("signin")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const wrapperFunctionSignIn = () => {
    handleShow();
    setAuthMode("signin");
  }
  
  const wrapperFunctionSignUp = () => {
    handleShow();
    setAuthMode("signup");
  }

  return (
    <>
      <Button variant="warning" onClick={wrapperFunctionSignIn}>
        Ingresar
      </Button>

      <Button variant="secondary" onClick={wrapperFunctionSignUp}>
        Registrate
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido a Re-Volt Rentals</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Login authMode={authMode} setAuthMode={setAuthMode} logIn={logIn} setUserName={setUserName} setInitials={setInitials} setShow={setShow}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CustomModal