import { useContext } from 'react';
import { DateContext } from '../context/DateContext';
export const useDateChange = () => {

    const {range,setRange} = useContext(DateContext)

    const handleDateChange = (item) => {
        setRange([item?.selection])
    };

    return {range,setRange,handleDateChange};
}

