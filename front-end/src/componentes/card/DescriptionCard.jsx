import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from 'react-router-dom'
import './DescriptionCard.css'

const DescriptionCard = () => {
    
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
        <div className="descriptionCard">
            <h3> {data.status} aca va el titulo</h3>
            <p> {data.gender} "ACA VA EL TEXTO" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, cupiditate? Voluptatibus laborum corrupti beatae eligendi similique, vel, pariatur ipsum nulla voluptates cupiditate, consequatur itaque repudiandae molestias vitae in. Dolorem, dolorum?</p>
        </div>
    );
};
export default DescriptionCard
