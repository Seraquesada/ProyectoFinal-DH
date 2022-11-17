import axios from 'axios';
import {useState,useEffect} from 'react'

export const useAxiosGet = (url) => {
    const [isLoading, setLoading] = useState(true);
    const [respuesta, setRespuesta] = useState();

    useEffect(() => {
        setLoading(true);
        axios.get(url)
        .then(res=>{
            setRespuesta(res.date)
            setLoading(false)
        })
    },[url])

    return {isLoading,respuesta}

}

