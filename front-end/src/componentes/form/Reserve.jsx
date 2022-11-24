import React from "react";
import "../form/Reserve.css";

let styles = {
    fontWeight: "bold",
    color: "#dc3545",
    position: "relative",
    display: "flex",
    justifyContent:"center"
};

function parseJwt (token) {
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

const Reserve = () => {

  return (
    <div className="form-reserva">
      <h2 className="completar-datos">Completá tus datos</h2>
      <form></form>
      <div className="controls-ft">
        <div className="container-input">
        <h3>Nombre</h3>
          <input
            type="text"
            name="name"
            value={parseJwt(localStorage.getItem('jwt')).nombre}
            required
            disabled
            />
        </div>
        <div className="container-input">
          <h3>Apellido</h3>
          <input
            type="text"
            name="surname"
            placeholder="Rodriguez"
            value={parseJwt(localStorage.getItem('jwt')).apellido}
            required
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
              value={parseJwt(localStorage.getItem('jwt')).sub}
              required
              disabled
              />
        </div>
      </div>
    </div>
  );
};

export default Reserve;
