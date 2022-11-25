import { useContext } from 'react';
import { DateContext } from '../context/DateContext';
import format from "date-fns/format";
export const useDateChange = () => {

    const {range,setRange} = useContext(DateContext)

    const handleDateChange = (item) => {
        setRange([item.selection])
    };

    return {range,handleDateChange};
}

