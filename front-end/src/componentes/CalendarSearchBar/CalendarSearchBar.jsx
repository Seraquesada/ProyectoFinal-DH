import React from "react"

import {DateRange} from "react-date-range"
import { useDateChange } from "../../hooks/useDateChange";
import { useHandleRisize } from "../../hooks/useHandleRisize";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const CalendarSearchBar = () => {
    const {range,handleDateChange } = useDateChange();
    const {size} = useHandleRisize(); 

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
            rangeColors={["orange"]}
            />
    </div>
  )
}

export default CalendarSearchBar