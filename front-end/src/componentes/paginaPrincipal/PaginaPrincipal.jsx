import React from "react";
import Header from "../header/Header"
import Category from "../category/Category"
import Footer from "../footer/Footer"
import GroupOfVehicles from "../GroupOfVehicles/GroupOfVehicles";

export const PaginaPrincipal = (props) => {
    return (
        <div >
          
      <Category/>
      <GroupOfVehicles/>
      

    </div>
    )
}