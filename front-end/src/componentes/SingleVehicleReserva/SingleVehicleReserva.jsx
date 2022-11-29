import { useEffect,useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from '../header/Header.jsx';
import HeaderCard from '../card/HeaderCard.jsx';
import PoliticsCard from '../card/PoliticsCard.jsx';
import Footer from "../footer/Footer";
import BookingBody from '../BookingBody/BookingBody.jsx';

const SingleVehicleReserva = () => {
    const { id } = useParams();
    const url = "http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/";
    const [isLoading, setLoading] = useState(true);
    const [respuesta, setRespuesta] = useState();
    
    const jwt = localStorage.getItem('jwt');

    const headers = {
      headers: {
          "Authorization" : `Bearer ${jwt}`
      }
  }
    useEffect(()=>{
        axios.get(url + id,headers)
        .then(res=> {   
            const datos = res.data
            setRespuesta(datos)
            setLoading(false)
        }
    )}, [])

    if(isLoading){
      return <p> Loading ...</p>
    }

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