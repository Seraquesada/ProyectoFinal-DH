import BookingDetails from "../BookingDetails/BookingDetails";
import {IoKeyOutline} from 'react-icons/all'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { useHandleRisize } from "../../hooks/useHandleRisize";
import { useDateChange } from "../../hooks/useDateChange";
import './BookingBody.css'
import TimePicker from 'react-time-picker';
import React, { useState } from 'react';


const BookingBody = ({respuesta}) => {
const {startDate, handleDateChange , endDate} = useDateChange();
const {size} = useHandleRisize(); 
const [value, onChange] = useState('10:00');

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
  
  

    return(
        <div className="bookingBody">
                      
           
           
           <div className="form">
            <h3> Completá tus datos</h3>
            <p>Datos</p>
            <p>Datos</p>
            <p>Datos</p>
           </div>

           <div className="bookingDetails">
            <BookingDetails respuesta={respuesta} />
           </div>

           

           <div className="calendario">
            <h3> Seleccioná tu fecha de reserva</h3>
            <DatePicker
            className="datepicker"
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            showDisabledMonthNavigation
            excludeDates={holidays}
            monthsShown={size > 510 ? 2 : 1}
            inline
            />
        </div>

           
           
           <div className="horariollegada">
                <h3> Tu horario de llegada</h3>
                <IoKeyOutline/> <p>Puedes retirar tu vehículo entre las 10:00 am y las 11:00 pm</p>
                <p>Indica tu horario estimado de retiro</p>
                
                <TimePicker onChange={onChange} value={value}/>
              

           </div>


        </div>
    );
};
export default BookingBody