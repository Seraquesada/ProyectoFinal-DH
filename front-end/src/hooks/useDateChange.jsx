import { useContext,useEffect } from 'react';

import { DateContext } from '../context/DateContext';

export const useDateChange = () => {
    
    const {startDate, setStartDate , endDate, setEndDate} = useContext(DateContext)
    
    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    useEffect(() => {
        window.localStorage.setItem('startDate', startDate);
    }, [startDate]);

    useEffect(() => {
        window.localStorage.setItem('endDate', endDate);
    }, [endDate]);

    useEffect(() => {
        console.log(endDate)
        //setEndDate((window.localStorage.getItem('endDate')));
        console.log(endDate)
    }, [endDate]);

    useEffect(() => {
        //startDate(JSON.parse(window.localStorage.getItem('startDate')));
    }, []);



    return {startDate, endDate, handleDateChange};
}

