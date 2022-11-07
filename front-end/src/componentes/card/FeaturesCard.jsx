import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from 'react-router-dom'
import './FeaturesCard.css'
import {TbManualGearbox,MdAirlineSeatReclineExtra,IoSpeedometerOutline,GiGasPump,BsFillPeopleFill,MdOutlineLuggage} from 'react-icons/all'



const FeaturesCard = () => {
    
    const [data, setData] = useState([]);
    const url = "https://rickandmortyapi.com/api";
    const characters = "/character/2";

    useEffect(() => {
      axios.get(url + characters ).then((res) => {
        console.log(res.data.results);
        setData(res.data);
        console.log(data);
        });
      }, []);


    return(
        <div className="featuresCard">
            <h3> ¿Qué tiene el auto seleccionado?</h3>
            <hr></hr>
            <div className="featuresDetails">
                <div className="featuresItem">
                    <BsFillPeopleFill/>
                    <p> {data.gender} aca van las caracteisticas</p>
                </div>
                <div className="featuresItem">
                    <MdOutlineLuggage/>
                    <p> {data.gender} aca van las caracteisticas</p>
                </div>
                <div className="featuresItem">
                    <TbManualGearbox/>
                    <p> {data.gender} aca van las caracteisticas</p>
                </div>
                <div className="featuresItem">
                    <MdAirlineSeatReclineExtra/>
                    <p> {data.gender} aca van las caracteisticas</p>
                </div >
                <div className="featuresItem">
                    <IoSpeedometerOutline/>
                    <p> {data.gender} aca van las caracteisticas</p>
                </div>
                <div className="featuresItem">
                    <GiGasPump/>
                    <p> {data.gender} aca van las caracteisticas</p>
                </div>
                
            </div>
        </div>
    );
};
export default FeaturesCard