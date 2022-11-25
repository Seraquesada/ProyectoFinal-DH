import axios from 'axios';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { DateContext } from '../../context/DateContext';
import './BookingDetails.css'

const BookingDetails = ({respuesta, hora}) => {

    const {range} = useContext(DateContext)

    const startNormalized = range[0].startDate?.toISOString().split("T")[0]
    const endNormalized = range[0].endDate?.toISOString().split("T")[0]
    const url = 'http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/reservas'
    const jwt= localStorage.getItem('jwt');

    function parseJwt (token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    
    const headers = {
        headers: {
            "Authorization" : `Bearer ${jwt}`
        }
    }
    const payload = {
        "horaInicio" : `${hora?.horario}:00`,
        "fechaInicio" : `${startNormalized}`,
        "fechaFinalizacion" : `${endNormalized}`,
        "producto" : {"id" : respuesta.id},
        "usuario" : {"id" : parseJwt(jwt).id}
    }
    const reservar = () => {
        axios.post(url, payload, headers)
        .then(function (response) {
            if(response.status === 200){
                confirm("Se ha registrado la reserva con exito")
            }
        })
        .catch(function (error) {
            console.log(error)
        });
    }
    
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
            <button onClick={reservar} className='btn btn-primary'>Confirmar reserva</button>  
        </div>
    );
};
export default BookingDetails
