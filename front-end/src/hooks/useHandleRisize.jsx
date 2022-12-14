import {useEffect, useState} from 'react'


export const useHandleRisize = () => {
    const [size,SetSize] = useState(window.innerWidth);

    const handleResize = () => {
        SetSize(window.innerWidth)
    }
    useEffect(()=>{
            window.addEventListener("resize",handleResize);
        return () => {
            window.removeEventListener("resize",handleResize);
        }
    },[])

    return {size};
}

