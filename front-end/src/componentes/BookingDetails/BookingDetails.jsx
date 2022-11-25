import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { DateContext } from '../../context/DateContext';
import './BookingDetails.css'

const BookingDetails = ({respuesta}) => {

    const {range} = useContext(DateContext)

    const startNormalized = range[0].startDate?.toISOString().split("T")[0]
    const endNormalized = range[0].endDate?.toISOString().split("T")[0]
    
    return(
        <div className="infoCard">
            <h3> Detalle de Reserva</h3>
            <img className='auto' loading="lazy" src={respuesta.imagenes[1]?.url} />
            <h5> {respuesta.categoria.titulo}</h5>
            <h4> {respuesta.titulo}</h4>
            <h5> {respuesta.ciudad.nombre}</h5>
            <hr></hr>
            <h4 className='checkinOut'> Check in {startNormalized} </h4>
            <hr></hr>
            <h4 className='checkinOut'> Check out {endNormalized} </h4>
            <button className='btn btn-primary'>Confirmar reserva</button>  
        </div>
    );
};
export default BookingDetails
