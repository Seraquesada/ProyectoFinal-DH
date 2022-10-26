import React from "react";
import Header from "../header/Header"
import Category from "../category/Category"
import Footer from "../footer/Footer"
import GroupOfVehicles from "../GroupOfVehicles/GroupOfVehicles";
import { useState } from "react";

export const PaginaPrincipal = () => {
const [categoria, setCategoria] = useState(" ");
console.log(categoria)
    return (
        <div >
      <Header/>
      <Category cambioCategoria = {setCategoria}/>
      <GroupOfVehicles categoria1={categoria}/>
      <Footer/>
    </div>
    )
}