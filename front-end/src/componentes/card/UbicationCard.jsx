import './UbicationCard.css'
import StarRating from './StarRating'

const UbicationCard = ({respuesta}) => {
    return(
        <div className="ubicationCard">
            
            <div className="infoUbicacion">
                <h5> {respuesta.ciudad.nombre} aca va la ciudad</h5>
                <h6> {respuesta.ciudad.nombre} aca va la distancia del centro</h6>
            </div>
            <div className ="iconosUbicacion">
                <div id="raiting"> 
                   <h5>Excelente</h5>
                   <StarRating /> 
                </div>
                <div id="points">
                    <p>8</p>
                </div>
            </div>
        </div>
    );
};
export default UbicationCard

