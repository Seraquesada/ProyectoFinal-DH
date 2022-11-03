import React,{useEffect ,useState} from 'react';
import Header from "../header/Header";
import DatePicker from "react-datepicker"
import {  useParams, Outlet } from 'react-router-dom';
import axios from 'axios'
import Footer from "../footer/Footer"
const SingleVehicle = () => {

    //si no se entiende carajo es porque vamos bien
    // esta con esa api porque la nuestra no tiene el endpoint para hacerlo
    // pero sacando eso """"creo que funciona""""
    //no borrar porfa

    const {id} = useParams();
    const [name, setName] = useState("");
    const [imagen, setImagen] = useState("")
    const [planet, setPlanet] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const url = "https://rickandmortyapi.com/api";
    const characters = "/character";
    
    useEffect(()=>{
        axios.get(url + characters + "/" + id)
        .then(res=> 
        {
            setName(res.data.name);
            setImagen(res.data.image);
            setPlanet(res.data.location.name);
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
            <div className="container-calendar">
                <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    minDate={new Date(startDate)}
                    excludeDates={[new Date(), (new Date(),10)]}
                    monthsShown={2}
                    />
            </div>
            <Footer/>
        </>
    )
}

export default SingleVehicle