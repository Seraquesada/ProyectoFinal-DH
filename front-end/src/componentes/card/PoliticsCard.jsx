import React, { useEffect, useState } from "react";
import './PoliticsCard.css'



const PoliticsCard = ({respuesta}) => {
    return(
        <div className="politicsCard">
            <h3> ¿Qué tenés que saber ?</h3>
            <hr></hr>
            <div className="politicsDetails">
                <div className="politicsItem">
                    <h4> {respuesta.politicasProducto.normasTitulo}</h4>
                    <ul>
                        <li>{respuesta.politicasProducto.normasDescripcion}</li>
                    </ul>
                </div>
                <div className="politicsItem">
                    <h4> {respuesta.politicasProducto.seguridadTitulo}</h4>
                    <ul>
                        <li>{respuesta.politicasProducto.seguridadDescripcion}</li>
                    </ul>
                </div>
                <div className="politicsItem">
                    <h4> {respuesta.politicasProducto.cancelacionTitulo}</h4>
                    <ul>
                        <li>{respuesta.politicasProducto.cancelacionDescripcion}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default PoliticsCard