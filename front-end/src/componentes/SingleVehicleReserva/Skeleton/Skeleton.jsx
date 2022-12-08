import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./VehicleSkeleton.css"

const CategorySkeleton = ({cards}) => {
    return Array(cards)
            .fill(0)
            .map((_, i) => (
                <></>
            ));
};

export default CategorySkeleton;