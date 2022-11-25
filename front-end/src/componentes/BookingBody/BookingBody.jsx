import React from 'react';
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
        <div className="bookingBody">
            <div className="forms">
                <Reserve/>
            </div>
            <div className="bookingDetails">
                <BookingDetails respuesta={respuesta} hora={hora}/>
            </div>
            <div className="horariollegada">
                <h3> Tu horario de llegada</h3>
                <IoKeyOutline/> <p>Puedes retirar tu vehículo entre las 10:00 am y las 11:00 pm</p>
                <p>Indica tu horario estimado de retiro</p>
                <MyListbox setHora={setHora}/>
            </div>
        </div>
    );
};
export default BookingBody