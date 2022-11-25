import React from "react"
import { useDateChange } from "../../hooks/useDateChange";
import {DateRange} from "react-date-range"

import { useHandleRisize } from "../../hooks/useHandleRisize";
import { useFechasReservadas } from "../../hooks/useFechasReservadas";
import "./Calendar.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
const CalendarComponent = () => {  

  const {fechasReservadas} = useFechasReservadas()
  const {range,handleDateChange } = useDateChange();
  const {size} = useHandleRisize(); 
  const holidays = [
        new Date(2022, 10, 14),
        new Date(2022, 11, 11),
        new Date(2022, 10, 28),
        new Date(2022, 12, 25),
        new Date(2022, 1, 1),
        new Date(2022, 1, 20),
        new Date(2022, 2, 17),
        new Date(2022, 5, 25),
        new Date(2022, 7, 3),
        new Date(2022, 9, 7)
    ];



  return (
    <div className="calendar-container">
        <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            months={size > 510? 2 : 1}
            onChange={handleDateChange}
            direction="horizontal"
            ranges={range}
            className="calendarElement"
            minDate={new Date()}
            disabledDates={holidays}
            size="small"
            />
    </div>
  )
}

export default CalendarComponent