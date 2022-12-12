import React from "react";
import {TbManualGearbox,MdAirlineSeatReclineExtra,IoSpeedometerOutline,GiGasPump,BsFillPeopleFill,MdOutlineLuggage} from 'react-icons/all'

const iconos = [<BsFillPeopleFill/>, <MdOutlineLuggage/>, <TbManualGearbox/>, <MdAirlineSeatReclineExtra/>, <IoSpeedometerOutline/>, <GiGasPump/>]

const CaracteristicaElement = ({caracteristica}) => {
    return(
        <div className="featuresItem">
            {iconos[caracteristica.icono]}
            <p>
                {caracteristica.nombre} 
                {caracteristica.valor}
            </p>
        </div>
)};

export default CaracteristicaElement;