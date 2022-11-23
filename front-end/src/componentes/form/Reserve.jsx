import React, { useEffect, useState, useContext } from "react";
import "../form/Reserve.css";
import { useForm } from "../../hooks/useForm";
import axios from "axios";

const initialForm = {
name:"",
surname:"",
email:"",
city:"",
};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexSurname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexCity = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    if (!form.name.trim()){
        errors.name = "El campo 'Nombre' es requerido";
    }else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
      };

    if (!form.surname.trim()){
        errors.surname = "El campo 'Apellido' es requerido";
    }else if (!regexSurname.test(form.surname.trim())) {
        errors.surname = "El campo 'Apellido' sólo acepta letras y espacios en blanco";
      };

    if (!form.email.trim()){
        errors.email = "El campo 'Email' es requerido";
    }else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto";
      };

    if (!form.city.trim()){
        errors.city = "El campo 'Ciudad' es requerido";
    }else if (!regexCity.test(form.city.trim())) {
        errors.city = "El campo 'Ciudad' sólo acepta letras y espacios en blanco";
      };

    return errors;
};

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
};

const Reserve = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="form-reserva">
      <h2 class="completar-datos">Completá tus datos</h2>
      <form onSubmit={handleSubmit}></form>
      <div class="controls-ft">
        <h3>Nombre</h3>
        <input
          type="text"
          name="name"
          placeholder="Bruno"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <h3>Apellido</h3>
        <input
          type="text"
          name="surname"
          placeholder="Rodriguez"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.surname}
          required
        />
        {errors.surname && <p style={styles}>{errors.surname}</p>}
      </div>
      <div class="controls-sn">
      <h3>Correo electronico</h3>
        <input
          type="email"
          name="email"
          placeholder="brodriguez@gmail.com"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <h3>Ciudad</h3>
        <input
          type="text"
          name="city"
          placeholder="Ciudad"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.city}
          required
        />
        {errors.city && <p style={styles}>{errors.city}</p>}
      </div>
    </div>
  );
};

export default Reserve;
