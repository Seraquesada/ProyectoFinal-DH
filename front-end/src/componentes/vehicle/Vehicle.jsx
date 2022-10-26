import React from "react";
import "../groupOfVehicles/groupOfVehicles.css";
import { GrStar } from "react-icons/gr";
import {IoMdPin} from "react-icons/io";
import{GiCarWheel,GiCarSeat} from "react-icons/gi";
const Vehicle = ({
  id,
  url_imagen,
  category,
  title,
  location,
  description,
}) => {
  return (
    <div className="vehicle" key={id}>
      <div  className="container-img-vehicle">
        <img className="imgVehicle" src={url_imagen} alt="fotorender" />
      </div>
      <div className="descriptionVehicle">
        <div>
        <div className="category-star">
          <p className="reco-name-category">{category}</p>
          <p className="star">
            <span>
              <GrStar />
            </span>
            <span>
              <GrStar />
            </span>
            <span>
              <GrStar />
            </span>
            <span>
              <GrStar />
            </span>
            <span>
              <GrStar />
            </span>
          </p>
        </div>
        <h4 className="titleCard">{title}</h4>
        </div>
        <div className="container-location">
           <div>
            <span><IoMdPin/></span>
        
        <p>{location}</p>
        </div>
        <p className="linkMap"><a>MOSTRAR EN EL MAPA</a></p>
        </div>
        <div className="features">
<GiCarWheel/>
<GiCarSeat/>
        </div>
        <p className="description">{description}</p>
         <button className="buttonVerMas">ver más</button>
      </div>
    </div>
  );
};
export default Vehicle;
