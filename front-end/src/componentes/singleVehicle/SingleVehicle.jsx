import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import Header from "../header/Header";
import SliderCard from "../card/SliderCard.jsx";
import "../card/SliderCard.css";
import HeaderCard from "../card/HeaderCard";
import UbicationCard from "../card/UbicationCard";
import DescriptionCard from "../card/DescriptionCard";
import FeaturesCard from "../card/FeaturesCard";
import PoliticsCard from "../card/PoliticsCard";
import axios from "axios";
import Footer from "../footer/Footer";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./SingleVehicle.css";
import { useHandleRisize } from "../../hooks/useHandleRisize";
import { useDateChange } from "../../hooks/useDateChange";
import SingleVehicleSkeleton from "./Skeleton/Skeleton";

const SingleVehicle = () => {

  const { id } = useParams();
  const url = `  http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/`  ;
  const {startDate, endDate, handleDateChange } = useDateChange();
  const {size} = useHandleRisize(); 
  const [isLoading, setLoading] = useState(true);
  const [respuesta, setRespuesta] = useState();

  useEffect(()=>{
    axios.get(url + id)
    .then(res=> 
    {
      const datos = res.data
      setRespuesta(datos)
      setLoading(false)
    })},[])


const holidays = [
    new Date(2022, 10, 14),
    new Date(2022, 11, 11),
    new Date(2022, 10, 28),
    new Date(2022, 12, 25),
    new Date(2022, 1, 1),
    new Date(2022, 1, 20),
    new Date(2022, 2, 17),
    new Date(2022, 5, 25),
    new Date(2022, 7, 3),
    new Date(2022, 9, 7)
  ];


  if (isLoading) {
    return (
    <>
      <Header/>
      <SingleVehicleSkeleton  cards={1}/>
      <Footer/>
    </>
    )
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
            className="datepicker"
            onChange={handleDateChange}
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            showDisabledMonthNavigation
            monthsShown={size > 510 ? 2 : 1}
            inline
            selectsRange
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
