import axios from 'axios';
import {useState,useEffect} from 'react'

export const useAxiosGet = (url) => {

    const [isLoading, setLoading] = useState(true);
    const [respuesta, setRespuesta] = useState([]);

    useEffect(() => {
        const getData = async () =>{
            const {data} = await axios.get(url)
                setRespuesta(data)
                setLoading(false)
        }
        getData()

    },[url])

    return {isLoading,respuesta}

}

