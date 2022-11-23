import React,{useState,createContext} from 'react'

export const DateContext = createContext();

export const DateProvider = ({children}) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [checkIn,setCheckIn] = useState()
    const [checkOut,setCheckOut] = useState()
    return (
    <DateContext.Provider value={{startDate, setStartDate,endDate, setEndDate,checkIn,setCheckIn,checkOut,setCheckOut}}>
        {children}
    </DateContext.Provider>
)
}

