import React,{useState,createContext} from 'react'

export const DateContext = createContext();

export const DateProvider = ({children}) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    
    return (
    <DateContext.Provider value={{startDate, setStartDate,endDate, setEndDate,}}>
        {children}
    </DateContext.Provider>
)
}

