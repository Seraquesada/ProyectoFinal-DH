import React,{useState,useEffect,useContext} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { DateContext } from '../../context/DateContext.jsx';
import { Spinner } from 'react-bootstrap';
import { useAxiosGet } from '../../hooks/useAxiosGet.jsx';

const SingleVehicleReserva = () => {
    const { id } = useParams();
    const url = "http://ec2-3-134-86-241.us-east-2.compute.amazonaws.com:8080/productos/";
    const {startDate} = useContext(DateContext)
    const {endDate} = useContext(DateContext)
    const {respuesta,isLoading} = useAxiosGet(url + id)

    return <Spinner animation="border" size="sm" />;


}

export default SingleVehicleReserva