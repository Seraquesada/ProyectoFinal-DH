import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SearchBar from "../searchBar/SearchBar";
import SideBar from "../sideBar/SideBar";
export const Home = (props) => {
    return (
    <div >
      <Header/>
      <SearchBar/>
      {/* <SideBar/> */}
      <Footer/>
    </div>
    )
}