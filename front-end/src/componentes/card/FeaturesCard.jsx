import React from "react";
import './FeaturesCard.css';
import CaracteristicaElement from './CaracteristicaElement.jsx';

const FeaturesCard = ({respuesta}) => {

    return(
        <div className="featuresCard">
            <h3>¿Qué tiene el auto seleccionado?</h3>
            <hr></hr>
            <div className="featuresDetails">

                {respuesta.caracteristicas.map((caracteristica, i) => (
                    <CaracteristicaElement caracteristica={caracteristica} key={i} />
                ))}

            </div>
        </div>
    );
};
export default FeaturesCard