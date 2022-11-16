import { useContext,useEffect } from 'react';

import { DateContext } from '../context/DateContext';

const useDateChange = () => {

    const {startDate, setStartDate , endDate, setEndDate} = useContext(DateContext)

    useEffect(() => {
        window.localStorage.setItem('startDate', startDate);
    }, [startDate]);

    useEffect(() => {
        window.localStorage.setItem('endDate', endDate);
    }, [endDate]);

}

export default useDateChange