import React  from "react";
import Header from "../header/Header";
import Category from "../category/Category"
import Footer from "../footer/Footer"
import GroupOfVehicles from "../GroupOfVehicles/GroupOfVehicles";

import SearchBar from "../searchBar/SearchBar"
import { CategoryProvider } from "../../context/CategoryContext";

export const Home = (props) => {
    

    return (
      <CategoryProvider>
        <div>
          <Header/>
          <SearchBar/>
          <Category  />
          <GroupOfVehicles/>
          <Footer/>
        </div>
      </CategoryProvider>
    )
}