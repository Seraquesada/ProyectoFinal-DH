import React, {useState} from 'react';
import "./Login.css";
import axios from "axios";



export const Login = (props) => {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    const iniciarSesion = (e) => {
      e.preventDefault();
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
        "nombre": document.querySelector("#nombre").value,
        "apellido": document.querySelector("#apellido").value,
        "email": document.querySelector("#email").value,
        "password" : document.querySelector("#contraseña").value
      }
      axios.post('http://localhost:8080/usuarios/register', payload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Iniciar Sesión</h3>
              <div className="form-group mt-3">
                <label for="email">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="email"
                  placeholder="Ingresa tu correo electrónico"
                />
              </div>
              <div className="form-group mt-3">
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={iniciarSesion}>
                  Ingresar
                </button>
              </div>
              <div className="text-center">
              ¿Todavía no te registraste?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Registrarse
                </span>
              </div>
              <p className="text-center mt-2">
              ¿Olvidaste tu <a href="#">contraseña?</a>
              </p>
            </div>
          </form>
        </div>
      )
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Registro</h3>
            <div className="form-group mt-3">
              <label for="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                className="form-control mt-1"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group mt-3">
              <label for="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                className="form-control mt-1"
                placeholder="Apellido"
              />
            </div>
            <div className="form-group mt-3">
              <label for="email">Correo Elecrónico</label>
              <input
                type="email"
                id="email"
                className="form-control mt-1"
                placeholder="Correo Electrónico"
              />
            </div>
            <div className="form-group mt-3">
              <label for="password">Ingresar contraseña</label>
              <input
                type="password"
                id="password"
                className="form-control mt-1"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group mt-3">
              <label for="passwordCheck">Confirmar contraseña</label>
              <input
                type="password"
                id="passwordCheck"
                className="form-control mt-1"
                placeholder="Confirmar contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={registrarUsuario}>
                Crear Cuenta
              </button>
            </div>
            <div className="text-center">
              ¿Ya estás registrado?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Iniciar Sesión
              </span>
            </div>
            <p className="text-center mt-2">
              ¿Olvidaste tu <a href="#">contraseña?</a>
            </p>
          </div>
        </form>
      </div>
    )
}
export default Login