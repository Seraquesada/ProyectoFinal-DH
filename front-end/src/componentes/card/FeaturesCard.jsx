import React, { useEffect, useState } from "react";
import './FeaturesCard.css';
import {TbManualGearbox,MdAirlineSeatReclineExtra,IoSpeedometerOutline,GiGasPump,BsFillPeopleFill,MdOutlineLuggage} from 'react-icons/all'



const FeaturesCard = ({respuesta}) => {
    return(
        <div className="featuresCard">
            <h3>¿Qué tiene el auto seleccionado?</h3>
            <hr></hr>
            <div className="featuresDetails">
                <div className="featuresItem">
                    <BsFillPeopleFill/>
                    <p>{respuesta.caracteristicas[0].nombre} {respuesta.caracteristicas[0].valor}</p>
                </div>
                <div className="featuresItem">
                    <MdOutlineLuggage/>
                    <p>{respuesta.caracteristicas[1].nombre} {respuesta.caracteristicas[1].valor}</p>
                </div>
                <div className="featuresItem">
                    <TbManualGearbox/>
                    <p>{respuesta.caracteristicas[2].nombre} {respuesta.caracteristicas[2].valor}</p>
                </div>
                <div className="featuresItem">
                    <MdAirlineSeatReclineExtra/>
                    <p>{respuesta.caracteristicas[3].nombre} {respuesta.caracteristicas[3].valor}</p>
                </div >
                <div className="featuresItem">
                    <IoSpeedometerOutline/>
                    <p>{respuesta.caracteristicas[4].nombre} {respuesta.caracteristicas[4].valor}</p>
                </div>
                <div className="featuresItem">
                    <GiGasPump/>
                    <p>{respuesta.caracteristicas[5].nombre} {respuesta.caracteristicas[5].valor}</p>
                </div>
                
            </div>
        </div>
    );
};
export default FeaturesCard