import './UbicationCard.css';
import StarRating from './StarRating';
import {IoMdPin} from "react-icons/io";

const UbicationCard = ({respuesta}) => {
    return(
        <div className="ubicationCard">
            
            <div className="infoUbicacion">
                <h5>Ubicación del vehículo: {respuesta.ciudad.nombre}</h5>
                <h6><span><IoMdPin/> </span> {respuesta.ciudad.nombre}
                </h6>
            </div>
            <div className ="iconosUbicacion">
                <div id="raiting"> 
                    <h5>Excelente</h5>
                    <StarRating /> 
                </div>
                <div id="points">
                    <p>10</p>
                </div>
            </div>
        </div>
    );
};
export default UbicationCard

