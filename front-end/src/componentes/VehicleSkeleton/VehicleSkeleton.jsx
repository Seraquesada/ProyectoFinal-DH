import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./VehicleSkeleton.css"

const CategorySkeleton = ({cards}) => {
    return Array(cards)
            .fill(0)
            .map((_, i) => (
                <div className="vehicle-skeleton" key={5}>
                    <div className="left">
                        <Skeleton duration={4} className="img-skeleton"  width={176} height={315}/>
                    </div>
                    <div className="right"> 
                        <div>
                            <Skeleton duration={4} count={2}/>
                        </div>
                        <div>
                            <Skeleton/>
                        </div>
                        <div>
                            <Skeleton duration={4} width={24} height={18}/>
                        </div>
                        <div>
                            <Skeleton duration={4} count={5}/>
                        </div>
                        <div className="VerMas">
                            <Skeleton duration={4}  max-width={810} height={46} />
                        </div>
                    </div>
                </div>
            ));
};

export default CategorySkeleton;