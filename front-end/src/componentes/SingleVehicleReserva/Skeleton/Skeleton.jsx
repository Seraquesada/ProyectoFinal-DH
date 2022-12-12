import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./Skeleton.css"
import "../../BookingBody/BookingBody.css"
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const SingleVehicleSkeleton = ({cards}) => {
    return Array(cards)
            .fill(0)
            .map((_, i) => (
                <>
                <Header/>
                <div className="headerCard" key={1}>
                    <Skeleton cards={2}  width={200} height={20}/>
                </div>
                <div className="container-reserva-skeleton">
                    <div className="booking-body-skeleton">
                        <div className="datosUser-skeleton">
                            <Skeleton className="b"  height={230}/>
                        </div>
                        <div className="calendario-container-skeleton">
                            <Skeleton className="b" height={370}  />
                        </div>
                        <div className="container-horariollegada-skeleton">
                            <Skeleton className="b"  height={242} />
                        </div>
                    </div>
                    <div className="container-booking-details-skeletons">
                        <div className="infoCard-skeleton">
                            <Skeleton className="info" height={690}/>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
                </>
            ));
};

export default SingleVehicleSkeleton;