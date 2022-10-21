import React from "react";


const Item = ({id,titulo,descripcion,url_imagen}) => {

return (
    <div className="item" key={id}>
        <img src={url_imagen} alt ="fotorender"/>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button> Ver Detalle </button>
    
    </div>
)
}
export default Item
