import React, { useEffect, useState } from "react";
import axios from "axios";
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
                    <p> {respuesta.caracteristicas[0]} aca van las caracteisticas</p>
                </div>
                <div className="featuresItem">
                    <MdOutlineLuggage/>
                    <p> {respuesta.caracteristicas[0]} aca van las caracteisticas</p>
                </div>
                <div className="featuresItem">
                    <TbManualGearbox/>
                    <p> {respuesta.caracteristicas[0]} aca van las caracteisticas</p>
                </div>
                <div className="featuresItem">
                    <MdAirlineSeatReclineExtra/>
                    <p> {respuesta.caracteristicas[0]} aca van las caracteisticas</p>
                </div >
                <div className="featuresItem">
                    <IoSpeedometerOutline/>
                    <p> {respuesta.caracteristicas[0]} aca van las caracteisticas</p>
                </div>
                <div className="featuresItem">
                    <GiGasPump/>
                    <p> {respuesta.caracteristicas[0]} aca van las caracteisticas</p>
                </div>
                
            </div>
        </div>
    );
};
export default FeaturesCard