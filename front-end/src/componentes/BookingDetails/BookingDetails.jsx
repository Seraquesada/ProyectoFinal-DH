import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { DateContext } from '../../context/DateContext';
import './BookingDetails.css'

const BookingDetails = ({respuesta}) => {

    const {startDate, setStartDate , endDate, setEndDate} = useContext(DateContext)

    return(
        <div className="infoCard">
            <h3> Detalle de Reserva</h3>
            <img className='auto' loading="lazy" src={respuesta.imagenes[1]?.url} />
            <h5> {respuesta.categoria.titulo}</h5>
            <h4> {respuesta.titulo}</h4>
            <h5> {respuesta.ciudad.nombre}</h5>
            <hr></hr>
            <h4 className='checkinOut'> Check in  </h4>
            <hr></hr>
            <h4 className='checkinOut'> Check out </h4>
            <button className='btn btn-primary'>Confirmar reserva</button>  
        </div>
    );
};
export default BookingDetails
