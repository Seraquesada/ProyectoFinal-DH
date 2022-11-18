import React,{useState,useEffect,useContext} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { DateContext } from '../../context/DateContext.jsx';
import { Spinner } from 'react-bootstrap';
import { useAxiosGet } from '../../hooks/useAxiosGet.jsx';
import Header from '../header/Header.jsx';
import HeaderCard from '../card/HeaderCard.jsx';
import PoliticsCard from '../card/PoliticsCard.jsx';
import Footer from "../footer/Footer";
import BookingDetails from "../BookingDetails/BookingDetails"
import BookingBody from '../BookingBody/BookingBody.jsx';

const SingleVehicleReserva = () => {
    const { id } = useParams();
    const url = "http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/";
    const {startDate} = useContext(DateContext)
    const {endDate} = useContext(DateContext)
    
    const [isLoading, setLoading] = useState(true);
    const [respuesta, setRespuesta] = useState();

    useEffect(()=>{
        axios.get(url + id)
        .then(res=> {   
            const datos = res.data
            setRespuesta(datos)
            setLoading(false)
            console.log(datos)
        }
    )}, [])

    if(isLoading){
      return <p> cargando</p>
    }
    console.log(respuesta)
    return (
        <>
          
          <Header />
  
          <HeaderCard respuesta={respuesta} />
          
          <BookingBody respuesta={respuesta} />

          
          <PoliticsCard respuesta={respuesta} />
  
          <Footer />
  
        </>
      );  
  
  }
  



export default SingleVehicleReserva