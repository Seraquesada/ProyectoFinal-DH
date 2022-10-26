import React from "react";
import './ItemCategory.css'


const ItemCategory = ({titulo,descripcion,url_imagen, cambioCategoria}) => {


return (

    <div className="item">
        <img src={url_imagen} alt ="fotorender"/> 
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <button onClick= {()=>cambioCategoria(titulo)} > Ver Vehiculos </button>
    </div>
)
}
export default ItemCategory
