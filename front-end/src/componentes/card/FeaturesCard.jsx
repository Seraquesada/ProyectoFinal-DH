import React from "react";
import './FeaturesCard.css';
import {TbManualGearbox,MdAirlineSeatReclineExtra,IoSpeedometerOutline,GiGasPump,BsFillPeopleFill,MdOutlineLuggage} from 'react-icons/all'

const iconos = [<BsFillPeopleFill/>, <MdOutlineLuggage/>, <TbManualGearbox/>, <MdAirlineSeatReclineExtra/>, <IoSpeedometerOutline/>, <GiGasPump/>]

const FeaturesCard = ({respuesta}) => {
    console.log(respuesta)
    return(
        <div className="featuresCard">
            <h3>¿Qué tiene el auto seleccionado?</h3>
            <hr></hr>
            <div className="featuresDetails">
                <div className="featuresItem">
                    {iconos[respuesta.caracteristicas[0].icono]}
                    <p>{respuesta.caracteristicas[0].nombre} {respuesta.caracteristicas[0].valor}</p>
                </div>
                <div className="featuresItem">
                {iconos[respuesta.caracteristicas[1].icono]}
                    <p>{respuesta.caracteristicas[1].nombre} {respuesta.caracteristicas[1].valor}</p>
                </div>
                <div className="featuresItem">
                {iconos[respuesta.caracteristicas[2].icono]}
                    <p>{respuesta.caracteristicas[2].nombre} {respuesta.caracteristicas[2].valor}</p>
                </div>
                <div className="featuresItem">
                {iconos[respuesta.caracteristicas[3].icono]}
                    <p>{respuesta.caracteristicas[3].nombre} {respuesta.caracteristicas[3].valor}</p>
                </div >
                <div className="featuresItem">
                {iconos[respuesta.caracteristicas[4].icono]}
                    <p>{respuesta.caracteristicas[4].nombre} {respuesta.caracteristicas[4].valor}</p>
                </div>
                <div className="featuresItem">
                {iconos[respuesta.caracteristicas[5].icono]}
                    <p>{respuesta.caracteristicas[5].nombre} {respuesta.caracteristicas[5].valor}</p>
                </div>
                
            </div>
        </div>
    );
};
export default FeaturesCard