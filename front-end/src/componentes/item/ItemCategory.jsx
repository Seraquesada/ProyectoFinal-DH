import React from "react";


const ItemCategory = ({id,titulo,descripcion,url_imagen}) => {

return (
    
    <div className="item" key={id}>
        <img src={url_imagen} alt ="fotorender"/>
        
        <div className="container-category-text">  
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        </div>
    
    </div>
)
}
export default ItemCategory
