import { useState,useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

export const useFechasReservadas = () => {

    const {id} = useParams();
    const [fechasReservadas, setFechasReservadas]= useState([])
    const url = 'http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/reservas/producto/'+ id;
    const jwt= localStorage.getItem('jwt');
    
    const config =  {
        headers:
        {'Authorization':`Bearer ${jwt}`}
    };
    
    useEffect(() => {
        axios.get(url,config)
        .then(response => {
            console.log(response.data)
            setFechasReservadas(response.data)
        })
    },[id])

    return {fechasReservadas}
}

