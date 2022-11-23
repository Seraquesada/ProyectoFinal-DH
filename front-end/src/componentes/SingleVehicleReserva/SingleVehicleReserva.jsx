import {useContext} from 'react'
import { useParams } from "react-router-dom";
import { DateContext } from '../../context/DateContext.jsx';
import { useAxiosGet } from '../../hooks/useAxiosGet.jsx';

const SingleVehicleReserva = () => {
    const { id } = useParams();
    const url = "http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/";
    const {startDate} = useContext(DateContext)
    const {endDate} = useContext(DateContext)
    const {respuesta,isLoading} = useAxiosGet(url + id)

}

export default SingleVehicleReserva