import React, { useEffect, useState } from "react";
import Header from "../header/Header";
//import CarouselBlock from "../product/carousel/CarouselBlock";//
//import '../product/carousel/Carousel.css'//
import SliderCard from "../card/SliderCard";
import "../card/SliderCard.css";
import DatePicker from "react-datepicker";
import { useParams, Outlet } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/Footer";
const SingleVehicle = () => {
  //si no se entiende carajo es porque vamos bien
  // esta con esa api porque la nuestra no tiene el endpoint para hacerlo
  // pero sacando eso """"creo que funciona""""
  //no borrar porfa

  const { id } = useParams();
  const [name, setName] = useState("");
  const [imagen, setImagen] = useState("");
  const [planet, setPlanet] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const [array, setArray] = useState([]);
  const url = "https://rickandmortyapi.com/api";
  const characters = "/character";
  console.log(array[0]?.name);
  useEffect(() => {
    axios.get(url + characters + "/").then((res) => {
      console.log(res.data.results);
      setArray(res.data.results);
      console.log(array);
      {
        /*setName(res.data.name);
            console.log(name);
            setImagen(res.data.image);
            setPlanet(res.data.location.name);*/
      }
    });
  }, []);

  return (
    <>
      <Header />

      <SliderCard />

      {/*<div className="container-calendar">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          excludeDates={[new Date(), (new Date(), 1)]}
          monthsShown={2}
        />
  </div>*/}
      <Footer />
    </>
  );
};

export default SingleVehicle;
