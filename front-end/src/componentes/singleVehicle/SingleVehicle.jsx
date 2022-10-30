import React,{useEffect ,useState} from 'react';
import Header from "../header/Header";
import { BrowserRouter, Route, Routes, useParams, Outlet } from 'react-router-dom';
import axios from 'axios'


const SingleVehicle = () => {

    //si no se entiende carajo es porque vamos bien
    // esta con esa api porque la nuestra no tiene el endpoint para hacerlo
    // pero sacando eso """"creo que funciona""""
    //no borrar porfa
    const {id} = useParams();
    const [name, setName] = useState("");
    const [imagen, setImagen] = useState("")
    const [planet, setPlanet] = useState("")

    const url = "https://rickandmortyapi.com/api"
    const characters = "/character"
    
    useEffect(()=>{
        axios.get(url + characters + "/" + id)
        .then(res=> 
        {
            setName(res.data.name);
            setImagen(res.data.image);
            setPlanet(res.data.location.name)
        }
        )},[id])
    return (
        <>
        <Header/>
        <div>
            <h2>{name}</h2>
            <h2>{planet}</h2>
            <img src={imagen} alt={name} />
        </div>
        </>
    )
}

export default SingleVehicle