import React,{useState,useEffect,useContext} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { DateContext } from '../../context/DateContext.jsx';
import { Spinner } from 'react-bootstrap';

const SingleVehicleReserva = () => {
    const { id } = useParams();
    const {startDate} = useContext(DateContext);
    const {endDate} = useContext(DateContext);
    const [isLoading, setLoading] = useState(true);
    const [respuesta, setRespuesta] = useState();
    
    const url = "http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/";
    useEffect(()=>{
        axios.get(url + id)
        .then(res=> {   
            const datos = res.data
            setRespuesta(datos)
            setLoading(false)
        }
    )}, [])

    return <Spinner animation="border" size="sm" />;


}

export default SingleVehicleReserva