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
        <div className="Auth-form-container bg-dark">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Iniciar Sesión</h3>
              <div className="form-floating mt-3">
                <input
                  type="email"
                  className="form-control mt-1"
                  id="email"
                  placeholder="Ingresa tu correo electrónico"
                />
                <label htmlFor="email">Correo Electrónico</label>
              </div>
              <div className="form-floating mt-3">
                <input
                  type="password"
                  className="form-control mt-1"
                  id="password"
                  placeholder="Ingresa tu contraseña"
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
                <span className="link-primary" onClick={changeAuthMode}>
                  Registrarse
                </span>
              </div>
              <p className="text-center mt-2">
              ¿Olvidaste tu <a href="#">contraseña</a>?
              </p>
            </div>
          </form>
        </div>
      )
    }
  
    return (
      <div className="Auth-form-container bg-dark">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Crear Cuenta</h3>
            <div className="form-floating mt-3">
              <input
                type="text"
                id="nombre"
                className="form-control mt-1"
                placeholder="Nombre"
              />
              <label htmlFor="nombre">Nombre</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="text"
                id="apellido"
                className="form-control mt-1"
                placeholder="Apellido"
              />
              <label htmlFor="apellido">Apellido</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="email"
                id="email"
                className="form-control mt-1"
                placeholder="ejemplo@mail.com"
                required
              />
              <label htmlFor="email">Correo Elecrónico</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="password"
                id="password"
                className="form-control mt-1"
                placeholder="Ingresa tu contraseña"
                required
                minLength={6}
              />
              <label htmlFor="password">Contraseña</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="password"
                id="passwordCheck"
                className="form-control mt-1"
                placeholder="Confirmar Contraseña"
                required
                minLength={6}
              />
              <label htmlFor="passwordCheck">Confirmar Contraseña</label>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-warning" onClick={registrarUsuario}>
                Registrarse
              </button>
            </div>
            <div className="text-center">
              ¿Ya estás registrado?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Iniciar Sesión
              </span>
            </div>
          </div>
        </form>
      </div>
    )
}
export default Login