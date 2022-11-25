import { useState,useEffect,useContext }  from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { DateContext } from '../context/DateContext';
import { addDays, eachDayOfInterval } from 'date-fns';

export const useFechasReservadas = () => {

    const {id} = useParams();
    const {excludeDatesInterval,setExcludeDatesInterval} = useContext(DateContext)
    const [excludeDates,setExcludeDates] = useState([])
    const url = 'http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/reservas/producto/'+ id;
    const jwt= localStorage.getItem('jwt');
    
    const config =  {
        headers:
        {'Authorization':`Bearer ${jwt}`}
    };
    useEffect(() => {
        axios.get(url,config)
        .then(response => {
            setExcludeDatesInterval(response.data)
        })
    },[id])

    useEffect(() => {
        if (excludeDatesInterval) {
            const exclude = excludeDatesInterval.map(el => {
                return {
                    start: new Date(el?.fechaInicio),
                    end: new Date(el?.fechaFinalizacion)
                }
            })
            setExcludeDates(exclude);
        }

    }, [excludeDatesInterval])

    const excludeDays = () => {
        const arrayDateDisable = []
        const aux = []
        if (!excludeDates) return arrayDateDisable;
        for (let i = 0; i < excludeDates.length; i++) {

            // Each day between 6 October 2014 and 10 October 2014:
            const result = eachDayOfInterval({
                start: addDays(new Date(excludeDatesInterval[i].fechaInicio), 1),
                end: addDays(new Date(excludeDatesInterval[i].fechaFinalizacion), 1)
            })
            aux.push(result)
        }

        aux.forEach(element => {
            element.forEach(item => {
                arrayDateDisable.push(item)
            });
        });
        return arrayDateDisable
    }

    return {excludeDays}
}

