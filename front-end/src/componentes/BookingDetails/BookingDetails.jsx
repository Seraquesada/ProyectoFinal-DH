import { Button } from 'react-bootstrap';
import './BookingDetails.css'

const BookingDetails = ({respuesta}) => {
    return(
        <div className="descriptionCard">
            <h3> Detalle de Reserva</h3>
            <img loading="lazy" src={respuesta.imagenes[1]?.url} />
            <h5> {respuesta.categoria.titulo}</h5>
            <h4> {respuesta.titulo}</h4>
            <h5> {respuesta.ciudad.nombre}</h5>
            <hr></hr>
            <h4 className='checkinOut'> Check in VA FECHA!! {respuesta.titulo}</h4>
            <hr></hr>
            <h4 className='checkinOut'> Check out VA FECHA!! {respuesta.titulo}</h4>
            <button className='btn btn-primary'>Confirmar reserva</button>  


        </div>
    );
};
export default BookingDetails
