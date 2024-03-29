import React,{ createContext,useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
  
    const [categoria, setCategoria] = useState();
    const [ciudad, setCiudad] = useState();

    return (
    <CategoryContext.Provider value={{categoria, ciudad, setCategoria,  setCiudad}}>
        {children}
    </CategoryContext.Provider>
  )
}


