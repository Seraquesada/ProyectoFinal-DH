import React from "react";
import Header from "../header/Header"
import Footer from "../footer/Footer"
import SearchBar from "../searchBar/SearchBar"
export const PaginaPrincipal = (props) => {
    return (
        <div >
      <Header/>
      <SearchBar/>
      <Footer/>
    </div>
    )
}