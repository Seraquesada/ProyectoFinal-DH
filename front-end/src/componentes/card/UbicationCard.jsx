import React, { useEffect, useState } from "react";
import axios from "axios";
import './UbicationCard.css'
import StarRating from './StarRating'

const UbicationCard = () => {
    
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
        <div className="ubicationCard">
            
            <div className="infoUbicacion">
                <h5> {data.status} aca va la ciudad</h5>
                <h6> {data.gender} aca va la distancia del centro</h6>
            </div>
            <div className ="iconosUbicacion">
                <div id="raiting"> 
                    <h5>Excelente</h5>
                    <StarRating /> 
                </div>
                <div id="points">
                    <p>8</p>
                </div>
            </div>
        </div>
    );
};
export default UbicationCard

