import React, { useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import Reserve from "../form/Reserve";
import BookingDetails from "../BookingDetails/BookingDetails";
import './BookingBody.css'

import {IoKeyOutline} from 'react-icons/all'
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css"

import { useFechasReservadas } from '../../hooks/useFechasReservadas';
import { useDateChange } from "../../hooks/useDateChange";
import { useHandleRisize } from "../../hooks/useHandleRisize";
import MyListbox from "./MyListBox/MyListBox.jsx"

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
    const {id}= useParams();
    const {fechasReservadas} = useFechasReservadas(id)
    console.log(id)
    return(
        <div className="bookingBody">

            <div className="forms">
                <Reserve/>
            </div>
            <div className="bookingDetails">
                <BookingDetails respuesta={respuesta} startDate={startDate} endDate={endDate}/>
            </div>
                <h3> Seleccioná tu fecha de reserva</h3>
                <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    excludeDates={holidays}
                    monthsShown={size > 510 ? 2 : 1}
                    inline
                    selectsRange
                />
            <div className="horariollegada">
                <h3> Tu horario de llegada</h3>
                <IoKeyOutline/> <p>Puedes retirar tu vehículo entre las 10:00 am y las 11:00 pm</p>
                <p>Indica tu horario estimado de retiro</p>
                <MyListbox/>
            </div>
        </div>
    );
};
export default BookingBody