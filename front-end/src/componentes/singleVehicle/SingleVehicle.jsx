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

import DatePicker from 'react-date-picker';

const SingleVehicle = () => {

  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [respuesta, setRespuesta] = useState();

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  
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

      <FeaturesCard respuesta={respuesta}/>

      <PoliticsCard respuesta={respuesta}/>

      <div className="container-calendar ">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          selectsRange
          inline
          excludeDates={[/* aca va el array de fechas no disponibles */]}
          monthsShown={2}
        />
      </div>

      <Footer />
    </>
  );
};

export default SingleVehicle;
