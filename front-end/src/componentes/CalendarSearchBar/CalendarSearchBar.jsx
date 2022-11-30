import React,{useEffect, useState,useRef} from "react"

import {DateRange} from "react-date-range"
import { useDateChange } from "../../hooks/useDateChange";
import { useHandleRisize } from "../../hooks/useHandleRisize";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import format from 'date-fns/format'

import "./CalendarSearchBar.css"

const CalendarSearchBar = () => {
    const {range,handleDateChange } = useDateChange();
    const {size} = useHandleRisize(); 

  const [BookinRange, setBookinRange] = useState({
      checkin: '',
      checkout: ''
  })

  useEffect(() => {
      if (range && range[0].startDate != undefined && range[0].endDate != undefined) {
          setBookinRange({
              checkin: format(range[0]?.startDate, "dd/MM/yyyy"),
              checkout: format(range[0]?.endDate, "dd/MM/yyyy")
          }
          )
      }
  }, [range])
  // FIN - Muestra visualmente las fechas seleccionadas - formato

  // ==========================//
  // FUNCIONES DE LA LIBRERIA //
  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
      // event listeners
      document.addEventListener("keydown", hideOnEscape, true)
      document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
      if (e.key === "Escape") {
          setOpen(false)
      }
  }

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
      if (refOne.current && !refOne.current.contains(e.target)) {
          setOpen(false)
      }
  }

  return (
    <>
    <div>

      <Box sx={{ display: 'flex', mr: '10px', mt: 1, justifyContent: 'space-around', }}>
          <TextField
              sx={{ width: '50%', mr: 1 }}
              label="Check-in"
              variant="standard"
              localeText={{ start: 'Check-in', end: 'Check-out' }}
              onClick={() => setOpen(open => !open)}
              value={BookinRange.checkin} />
          <TextField
              sx={{ width: '50%', ml: 1 }}
              label="Check-out"
              variant="standard"
              onClick={() => setOpen(open => !open)}
              value={BookinRange.checkout} />
      </Box>
    <Box ref={refOne}>
            {open &&
                <DateRange
                    rangeColors={["orange"]}
                    onChange={handleDateChange}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={range}
                    months={size > 810? 2 : 1}
                    direction="horizontal"
                    className="calendarSearchBar"
                    staticRanges={[null,null]}
                />
                }
    </Box>
    </div>
    </>
  )
}

export default CalendarSearchBar