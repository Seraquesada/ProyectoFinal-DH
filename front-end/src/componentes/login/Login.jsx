import React, {useState} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import axios from "axios";



const Login = ({authMode, setAuthMode, logIn}) => {
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }else {
      registrarUsuario(event)
    }
  };

  const changeAuthMode = () => {
    if(authMode ==="signup"){
      setAuthMode("signin")
    }
    //setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  const iniciarSesion = (e) => {
    e.preventDefault();
    logIn();
    let payload = {
      "username": document.querySelector("#email").value,
      "password" : document.querySelector("#contraseña").value
    }
    axios.post('http://localhost:8080/usuarios/authenticate', payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  const registrarUsuario = (e) => {
    e.preventDefault();
    let payload = {
      "nombre": document.querySelector("#nombre").value + " " + document.querySelector("#apellido").value,
      "userName": document.querySelector("#email").value,
      "email": document.querySelector("#email").value,
      "password" : document.querySelector("#contraseña").value
    }
    axios.post('http://localhost:8080/usuarios', payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container bg-dark">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar Sesión</h3>
            <div className="form-floating mt-3">
              <input
                type="email"
                className="form-control mt-1"
                id="email"
                placeholder=" "
              />
              <label htmlFor="email">Correo Electrónico</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="password"
                className="form-control mt-1"
                id="password"
                placeholder=" "
              />
              <label htmlFor="password">Contraseña</label>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-warning" onClick={iniciarSesion}>
                Ingresar
              </button>
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
        </form>
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