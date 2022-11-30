import React from "react";
import "../form/Reserve.css";

function parseJwt (token) {
  let base64Url = token?.split('.')[1];
  let base64 = base64Url?.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

  const jwt = localStorage.getItem('jwt');

const Reserve = () => {

  return (
    <>
    <h2 className="completar-datos">Completá tus datos</h2>
    <div className="form-reserva">
      <div className="controls-ft">
        <div className="container-input">
        <h3>Nombre</h3>
          <input
            type="text"
            name="name"
            value={parseJwt(jwt).nombre}
            disabled
            />
        </div>
        <div className="container-input">
          <h3>Apellido</h3>
          <input
            type="text"
            name="surname"
            placeholder="Rodriguez"
            value={parseJwt(jwt).apellido}
            disabled
          />
        </div>
      </div>
      <div className="controls-sn">
        <div className="container-input">
          <h3>Correo electronico</h3>
            <input
              type="email"
              name="email"
              placeholder="brodriguez@gmail.com"
              value={parseJwt(jwt).sub}
              disabled
              />
        </div>
      </div>
    </div>
    </>
  );
};

export default Reserve;
