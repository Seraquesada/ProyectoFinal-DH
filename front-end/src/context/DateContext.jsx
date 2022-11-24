import React,{useState,createContext} from 'react'

export const DateContext = createContext();

export const DateProvider = ({children}) => {

    const [startDate, setStartDate] = useState(undefined);
    const [endDate, setEndDate] = useState(undefined);
    const [checkIn,setCheckIn] = useState()
    const [checkOut,setCheckOut] = useState()
    return (
    <DateContext.Provider value={{startDate, setStartDate,endDate, setEndDate,}}>
        {children}
    </DateContext.Provider>
)
}

