import './UbicationCard.css';
import {IoMdPin} from "react-icons/io";

const UbicationCard = ({respuesta}) => {
    return(
        <div className="ubicationCard mb-2">
            
            <div className="infoUbicacion">
                <h5>Ubicación del vehículo: {respuesta.ciudad.nombre}</h5>
                <h6><span><IoMdPin/> </span> {respuesta.ciudad.nombre}
                </h6>
            </div>
        </div>
    );
};
export default UbicationCard

