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
        window.localStorage.setItem('startDate', startDate.toISOString().split("T")[0]);
    }, [startDate]);

    useEffect(() => {
        if(endDate !== null) {
            window.localStorage.setItem('endDate', endDate.toISOString().split("T")[0]);
        }
    },[endDate])

    useEffect(() => {
        //setEndDate((window.localStorage.getItem('endDate')));
            
    }, [endDate]);
    
    useEffect(() => {
        //setStartDate(JSON.parse(window.localStorage.getItem('startDate')));
    }, []);

    return {startDate, endDate, handleDateChange};
}

