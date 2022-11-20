import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const CategorySkeleton = ({cards}) => {
    return Array(cards)
            .fill(0)
            .map((_, i) => (
                <div className="category-skeleton" key={i}>
                    <div className="top-row">
                        <Skeleton  max-width={480} height={350}/>
                    </div>
                    <div className="buttom-row">
                        <Skeleton max-width={480} count={5}/>
                    </div>
                </div>
            ));
};

export default CategorySkeleton;