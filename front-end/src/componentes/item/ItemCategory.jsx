import React from "react";
import './ItemCategory.css'


const ItemCategory = ({id,titulo,descripcion,url_imagen}) => {

return (

    <div className="item" key={id}>
        <img src={url_imagen} alt ="fotorender"/>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        
    
    </div>
)
}
export default ItemCategory
