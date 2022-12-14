import React from "react"
import { useDateChange } from "../../hooks/useDateChange";
import { DateRange } from "react-date-range"

import { useHandleRisize } from "../../hooks/useHandleRisize";
import { useFechasReservadas } from "../../hooks/useFechasReservadas";
import "./Calendar.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const CalendarComponent = () => {  

  const {excludeDays} = useFechasReservadas()
  const {range,handleDateChange } = useDateChange();
  const {size} = useHandleRisize(); 

  return (
    <div className="calendar-container">
        <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            months={size > 540? 2 : 1}
            onChange={handleDateChange}
            direction="horizontal"
            ranges={range}
            className="calendarElement"
            minDate={new Date()}
            disabledDates={excludeDays()}
            rangeColors={["orange"]}

            
            />
    </div>
  )
}

export default CalendarComponent