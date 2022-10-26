import React from "react";


const ItemCategory = ({titulo,descripcion,url_imagen, cambioCategoria}) => {


return (
    
    <div className="item" >
        <img src={url_imagen} alt ="fotorender"/>
        
        <div className="container-category-text">  
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        </div>
        <button onClick= {()=>cambioCategoria(titulo)} > Ver Vehiculos </button>

    </div>
)
}
export default ItemCategory
