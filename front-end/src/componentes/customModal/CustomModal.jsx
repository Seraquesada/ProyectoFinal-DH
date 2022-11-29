import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from '../../context/AuthContext';
import Login from '../login/Login';
import "./CustomModal.css";

const CustomModal = () => {

  const {
    show,
    wrapperFunctionSignIn,
    wrapperFunctionSignUp,
    handleClose
      } = useAuthContext()


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
          <Login/>
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