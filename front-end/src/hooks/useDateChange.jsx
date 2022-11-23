import { useContext } from 'react';
import { DateContext } from '../context/DateContext';

export const useDateChange = () => {

    const {startDate, setStartDate , endDate, setEndDate} = useContext(DateContext)

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return {startDate, endDate, handleDateChange};
}

