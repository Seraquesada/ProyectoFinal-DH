
import { useParams } from "react-router-dom";
import Header from '../header/Header.jsx';
import HeaderCard from '../card/HeaderCard.jsx';
import PoliticsCard from '../card/PoliticsCard.jsx';
import Footer from "../footer/Footer";
import BookingBody from '../BookingBody/BookingBody.jsx';
import { useAxiosGet } from '../../hooks/useAxiosGet.jsx';

const SingleVehicleReserva = () => {
    const { id } = useParams();
    const url = `http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/${id}`;
    const {respuesta, isLoading} = useAxiosGet(url)

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