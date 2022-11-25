import React,{useState,createContext} from 'react'
import {addDays} from "date-fns"
export const DateContext = createContext();

export const DateProvider = ({children}) => {
    const [range,setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(),7),
            key: 'selection'
        }
    ])

    const [excludeDatesInterval,setExcludeDatesInterval] = useState([])

    return (
    <DateContext.Provider value={{range,setRange,excludeDatesInterval,setExcludeDatesInterval}}>
        {children}
    </DateContext.Provider>
)
}

