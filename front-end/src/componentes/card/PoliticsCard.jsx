import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from 'react-router-dom'
import './PoliticsCard.css'



const PoliticsCard = () => {
    
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
        <div className="politicsCard">
            <h3> ¿ Qué tenés que saber ?</h3>
            <hr></hr>
            <div className="politicsDetails">
                <div className="politicsItem">
                    <h4> titulito</h4>
                    <ul>
                        <li>la 1</li>
                        <li>la 2</li>
                        <li>la 3</li>
                    </ul>
                </div>
                <div>
                    <h4> titulito</h4>
                    <ul>
                        <li>la 1</li>
                        <li>la 2</li>
                        <li>la 3</li>
                    </ul>
                </div>
                <div>
                    <h4> titulito</h4>
                    <ul>
                        <li>la 1</li>
                        <li>la 2</li>
                        <li>la 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default PoliticsCard