import React, {useState} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "./Login.css";
import axios from "axios";



const Login = ({authMode, setAuthMode, logIn, setUserName, setShow}) => {
  
  const [validated, setValidated] = useState(false);
  const [badCredentials, setBadCredentials] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }else {
      authMode === "signin" ? iniciarSesion(event) : registrarUsuario(event)
    }
  }
  function parseJwt (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
    setValidated(false)
  }
  const iniciarSesion = (e) => {
    e.preventDefault();
    let payload = {
      "username": document.querySelector("#email").value,
      "password" : document.querySelector("#password").value
    }
    axios.post('http://localhost:8080/usuarios/authenticate', payload)
    .then(function (response) {
      if(response.status === 200){
        localStorage.setItem('jwt', response.data.jwt);
        const unjwt = parseJwt(localStorage.getItem('jwt'))
        console.log(unjwt)
        setUserName(unjwt.sub)
        logIn();
      }else{
        console.log(response);
      }
    }).catch(function (error) {
      error.code === 'ERR_BAD_REQUEST' ? setBadCredentials(true) : console.log(error);
    });
    
  }

  const registrarUsuario = (e) => {
    e.preventDefault();
    let payload = {
      "nombre": document.querySelector("#nombre").value + " " + document.querySelector("#apellido").value,
      "userName": document.querySelector("#email").value,
      "mail": document.querySelector("#email").value,
      "password" : document.querySelector("#password").value
    }
    axios.post('http://localhost:8080/usuarios', payload)
    .then(function (response) {
      console.log(response);
      if(response.status === 200){
        setShow(false);
    }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container bg-dark">
        <Form className="Auth-form" noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar Sesión</h3>
            <Form.Group className="mb-3" controlId="email">
              <FloatingLabel controlId="email" label="Correo Elecrónico" className="mb-3">
                <Form.Control type="email" placeholder=" " required/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <FloatingLabel controlId="password" label="Contraseña">
                <Form.Control type="password" placeholder=" " minLength={6} required/>
              </FloatingLabel>
            </Form.Group>
            <div className="d-grid gap-2 mt-3">
            <Alert className={badCredentials ? null : "d-none"} key={"danger"} variant={"danger"} >
              Credenciales Inválidas, por favor intenta de nuevo.
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
            <p className="text-center mt-2">
            ¿Olvidaste tu <span style={{cursor:"pointer"}} className="link-primary" >contraseña</span>?
            </p>
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
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="apellido">
              <FloatingLabel controlId="apellido" label="Apellido" className="mb-3">
                <Form.Control type="text" placeholder=" " required/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <FloatingLabel controlId="email" label="Correo Elecrónico" className="mb-3">
                <Form.Control type="email" placeholder=" " required/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <FloatingLabel controlId="password" label="Contraseña">
                <Form.Control type="password" placeholder=" " minLength={6} required/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordCheck">
              <FloatingLabel controlId="passwordCheck" label="Verificar Contraseña">
                <Form.Control type="password" placeholder=" " minLength={6} required />
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