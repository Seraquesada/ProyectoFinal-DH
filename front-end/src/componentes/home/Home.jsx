import React, { useState }  from "react";
import Header from "../header/Header";
import Category from "../category/Category"
import Footer from "../footer/Footer"
import GroupOfVehicles from "../GroupOfVehicles/GroupOfVehicles";
import SideBar from "../sideBar/SideBar";

export const Home = (props) => {
const [categoria, setCategoria] = useState(" ");
    return (
    <div >
      <Header/>
      <Category cambioCategoria = {setCategoria}/>
      <GroupOfVehicles categoria1={categoria}/>
      <Footer/>
    </div>
    )
}