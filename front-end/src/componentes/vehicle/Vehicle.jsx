import React from "react";
import './Vehicle.css'


const Vehicle = ({id,url_imagen,category,title,location,description,}) => {

return (
    
    <div className="vehicle" key={id}>
        <div className="imgVehicle">
        <img src={url_imagen} alt ="fotorender"/>
        </div>
        <div className="descriptionVehicle">
        <h5>{category}</h5>
        <h4>{title}</h4>
        <h4>{location}</h4>
        <p>{description}</p>
        <button> Ver Detalle </button>
        </div>
    
    </div>
)
}
export default Vehicle