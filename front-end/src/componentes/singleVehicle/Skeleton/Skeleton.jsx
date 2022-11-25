import React from 'react'
import Skeleton from "react-loading-skeleton";
import "./Skeleton.css"
import 'react-loading-skeleton/dist/skeleton.css'

const SingleVehicleSkeleton = ({cards}) => {
    return Array(cards)
    .fill(0)
    .map((_, i) => (
        <>
            <div className="headerCard" key={i}>
                <Skeleton cards={2}  width={200} height={20}/>
            </div>
            <div className="ubicationCard" key={i}>
                <Skeleton  width={200} height={20}/> 
            </div>
            <div className="container-pictures-skeleton" key={i}>
                <div className="card-ltside">
                    <Skeleton  height={500} />
                </div>
                <div className="card-skeleton" >
                    <div className="image">
                        <Skeleton  className="a" />
                        <Skeleton  className="a" />
                    </div>
                    <div className="image"> 
                        <Skeleton  className="a" />
                        <Skeleton  className="a" />
                    </div>
                </div>
                <div className="escondido">
                    <Skeleton className="image" />
                </div>
            </div>                
            <div className="descriptionCard" key={i}>
                <Skeleton width={200} height={20}  />
                <Skeleton  />
                <Skeleton  />
            </div>  
        </>
    ));
}

export default SingleVehicleSkeleton