import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../header/Header";
import SliderCard from "../card/SliderCard.jsx";
import "../card/SliderCard.css";
import HeaderCard from "../card/HeaderCard";
import UbicationCard from "../card/UbicationCard";
import DescriptionCard from "../card/DescriptionCard";
import FeaturesCard from "../card/FeaturesCard";
import PoliticsCard from "../card/PoliticsCard";
import Footer from "../footer/Footer";
import CalendarComponent from "../Calendar/CalendarComponent";

import SingleVehicleSkeleton from "./Skeleton/Skeleton";
import "./SingleVehicle.css";
import { useAuthContext } from "../../context/AuthContext";
import { useAxiosGet } from "../../hooks/useAxiosGet";


const SingleVehicle = () => {

  const navigate = useNavigate();
  
  const { id } = useParams();
  const url = `http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/${id}`  ;
  const {respuesta, isLoading} = useAxiosGet(url)
  const {handleShow, loggedIn, setShow, setMustLogIn, setAuthMode} = useAuthContext()

  const handleReserve= () =>{
    //user
    if(loggedIn){
      navigate(`/singleVehicle/${id}/reserva`)
      setShow(false)
    }else{
      setAuthMode("signin");
      setMustLogIn(true);
      handleShow();
    }
    
  }

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
      <div className="containerReserva"> 
      <CalendarComponent/>
        <div className="container-button">
          <button className="buttonVerMas link" onClick={handleReserve}>Iniciar Reserva</button>
        </div>
      </div>
      <FeaturesCard respuesta={respuesta}/>
      <PoliticsCard respuesta={respuesta}/>
      <Footer />
    </>
  );
};

export default SingleVehicle;
