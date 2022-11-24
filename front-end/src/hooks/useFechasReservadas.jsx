import { useState,useEffect }  from 'react'
import axios from 'axios'

export const useFechasReservadas = (id) => {
    const [fechasReservadas, setFechasReservadas]= useState([])
    const url = 'http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/reservas/producto/' + id
    const jwt= localStorage.getItem('jwt');
    

    useEffect(() => {
        axios.get(url, {headers: {"Authorization" : `Bearer ${jwt}`}} )
        .then(response => {
            setFechasReservadas(response.data)
        })
    }
    ,[id])

    return {fechasReservadas}
}

