import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../header/Header";
import SliderCard from "../card/SliderCard";
import "../card/SliderCard.css";
import HeaderCard from "../card/HeaderCard";
import UbicationCard from "../card/UbicationCard";
import DescriptionCard from "../card/DescriptionCard";
import FeaturesCard from "../card/FeaturesCard";
import PoliticsCard from "../card/PoliticsCard";
import axios from "axios";
import Footer from "../footer/Footer";
import Spinner from 'react-bootstrap/Spinner';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import "./SingleVehicle.css"
const SingleVehicle = () => {

  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [respuesta, setRespuesta] = useState();
  const [size,SetSize] = useState(window.innerWidth);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleResize = () => {
    SetSize(window.innerWidth)
  }
  
  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    return () => {
      window.removeEventListener("resize",handleResize);
    }
  },[])

  const url = "http://localhost:8080/productos/";
  useEffect(()=>{
    axios.get(url + id)
    .then(res=> 
    {
      const datos = res.data
      setRespuesta(datos)
      setLoading(false)
    }
    )}, [])

  if (isLoading) {
    return <Spinner animation="border" size="sm" />;
  }
  return (
    <>
      <Header />

      <HeaderCard respuesta={respuesta} />
      
      <UbicationCard respuesta={respuesta} />

      <SliderCard respuesta={respuesta} />

      <DescriptionCard respuesta={respuesta}/>
      
      <div className="container-reserva">
        <div className="calendario">
        <DatePicker
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange
            inline
            excludeDates={[/* aca va el array de fechas no disponibles */]}
            monthsShown={size > 510 ? 2 : 1}
            />
        </div>
        <div className="container-button">
          <button className="btn btn-warning" type="button">Iniciar Reserva</button>
        </div>
      </div>
      
      <FeaturesCard respuesta={respuesta}/>

      <PoliticsCard respuesta={respuesta}/>


      <Footer />
    </>
  );
};

export default SingleVehicle;
