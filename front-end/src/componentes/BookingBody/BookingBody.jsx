import React,{useState} from 'react';
import Reserve from "../form/Reserve";
import BookingDetails from "../BookingDetails/BookingDetails";
import './BookingBody.css'
import {IoKeyOutline} from 'react-icons/all'
import "react-datepicker/dist/react-datepicker.css"
import MyListbox from "./MyListBox/MyListBox.jsx"
import CalendarComponent from '../Calendar/CalendarComponent.jsx'


const BookingBody = ({respuesta}) => {
    const [hora, setHora] = useState();
    return(
        <div className="container-reserva">
            <div className="booking-body">
                <div className="forms">
                    <Reserve/>
                </div>
                <div>
                    <h3>Selecciona Tu Fecha de Reserva</h3>
                    <CalendarComponent/>
                </div>
                <div className="horariollegada">
                    <h3> Tu horario de llegada</h3>
                    <IoKeyOutline/> <p>Puedes retirar tu vehículo entre las 10:00 am y las 11:00 pm</p>
                    <p>Indica tu horario estimado de retiro</p>
                    <MyListbox setHora={setHora}/>
                </div>
            </div>
            <div className="container-booking-details">
                <div className="bookingDetails">
                <BookingDetails respuesta={respuesta} hora={hora}/>
                </div>
            </div>
        </div>
    );
};
export default BookingBody