import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "./Login.css";

import { useAuthContext } from '../../context/AuthContext';



const Login = () => {
  
  //pasar a authMode
  const {
    validated,
    badCredentials,
    unreachable,
    registeredOK,
    originalPasswordPattern,
    handleSubmit,
    checkEquals,
    changeAuthMode,
    authMode
      } = useAuthContext()
  
  
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container bg-dark">
        <Form className="Auth-form" noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar Sesión</h3>
              <Alert className={registeredOK ? null : "d-none"} key=      {"RegisteredOK"} variant={"success"} >
              ¡Registro Exitoso! Ya puedes iniciar sesión:
              </Alert>
            <Form.Group className="mb-3" controlId="emailLog">
              <FloatingLabel controlId="emailLog" label="Correo Elecrónico" className="mb-3">
                <Form.Control type="email" pattern="\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+" placeholder=" " required/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordLog">
              <FloatingLabel controlId="passwordLog" label="Contraseña">
                <Form.Control type="password" placeholder=" " minLength={6} required/>
              </FloatingLabel>
            </Form.Group>
            <div className="d-grid gap-2 mt-3">
              <Alert className={badCredentials ? null : "d-none"} key={"BadCredentials"} variant={"danger"} >
                Credenciales Inválidas, por favor intenta de nuevo.
              </Alert>

              <Alert className={unreachable ? null : "d-none"} key={"Unreachable"} variant={"danger"} >
              Lamentablemente no ha podido iniciar sesión. Por favor intente de nuevo más tarde.
              </Alert>

              <Button type="submit" className="btn-warning">             
                Ingresar
              </Button>
            </div>
            <div className="text-center">
            ¿Todavía no te registraste?{" "}
              <span style={{cursor:"pointer"}} className="link-primary" onClick={changeAuthMode}>
                Registrate
              </span>
            </div>
          </div>
        </Form>
      </div>
    ) 
  }else{

    
    return (
    <div className="Auth-form-container bg-dark">
      <Form className="Auth-form" noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registrarse</h3>
            <Form.Group className="mb-3" controlId="nombre">
              <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
                <Form.Control type="text" placeholder=" " required/>
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa tu nombre.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="apellido">
              <FloatingLabel controlId="apellido" label="Apellido" className="mb-3">
                <Form.Control type="text" placeholder=" " required/>
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa tu apellido.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <FloatingLabel controlId="email" label="Correo Elecrónico" className="mb-3">
                <Form.Control type="email" pattern="\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+" placeholder=" " required/>
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa un correo elecrónico válido.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <FloatingLabel controlId="password" label="Contraseña">
                <Form.Control type="password" placeholder=" " onChange={e => checkEquals(e)} pattern="^\S{6,}$" required/>
                <Form.Control.Feedback type="invalid">
                  Debe contener al menos 6 caracteres.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordCheck">
              <FloatingLabel controlId="passwordCheck" label="Verificar Contraseña">
                <Form.Control pattern={`${originalPasswordPattern}`} onChange={e => checkEquals(e)} type="password" placeholder=" " required/>
                <Form.Control.Feedback type="invalid">
                  Las contraseñas no coinciden.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCheck">
            <Form.Check
              required
              label="Acepto términos y condiciones."
              feedback="Debes aceptar los términos y condiciones antes de registrarte"
              feedbackType="invalid"
            />
            </Form.Group>
            <div className="d-grid gap-2 mt-3">
              <Alert className={unreachable ? null : "d-none"} key={"Unreachable"} variant={"danger"} >
              Lamentablemente no ha podido registrarse. Por favor intente de nuevo más tarde.
              </Alert>
              <Button type="submit" className="btn-warning">
                Crear Cuenta
              </Button>
              <div className="text-center">
              ¿Ya estás registrado?{" "}
              <span style={{cursor:"pointer"}} className="link-primary" onClick={changeAuthMode}>
                Iniciar Sesión
              </span>
              </div>
            </div>
        </div>
      </Form>
    </div>    
  )
}
}
export default Login