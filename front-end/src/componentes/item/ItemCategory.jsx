import React, { useEffect, useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";

const ItemCategory = ({titulo,descripcion,url_imagen,id}) => {

    const {setCategoria} = useContext(CategoryContext)
    return (
    <div className="item" onClick= {()=>{setCategoria(id)}}>
        <img src={url_imagen} alt ="fotorender"/>
        <div className="container-category-text">  
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    </div>
)
}
export default ItemCategory
