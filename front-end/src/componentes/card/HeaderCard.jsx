import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from 'react-router-dom'
import './HeaderCard.css'
import {BsChevronLeft}from 'react-icons/bs';

const HeaderCard = () => {
    
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
        <div className="headerCard">
            <div>
            <div className="category-header">
            <h3> {data.name} aca va la categoria</h3>
            <h4> {data.species} aca va el titulo</h4>
            </div>
            </div>
                
                <Link className="flechaAtraslink" to={"/singleVehicle/1" }> <BsChevronLeft /> </Link>
            </div>
    );
};
export default HeaderCard

