import React, { useEffect, useState,useContext } from "react";
import { useParams,Link, Outlet } from "react-router-dom";

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
import {DateContext} from "../../context/DateContext.jsx";

const SingleVehicle = () => {
  
  const { id } = useParams();

  const {startDate} = useContext(DateContext)
  const {setStartDate} = useContext(DateContext)
  const {endDate} = useContext(DateContext)
  const {setEndDate} = useContext(DateContext)

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

  const url = "http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/";
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
          <Link className="buttonVerMas link" to={"/singleVehicle/" + id + "/reserva"}>Iniciar Reserva</Link>
          <Outlet/>
        </div>
      </div>
      
      <FeaturesCard respuesta={respuesta}/>

      <PoliticsCard respuesta={respuesta}/>


      <Footer />
    </>
  );
};

export default SingleVehicle;
