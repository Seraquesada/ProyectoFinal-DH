import React,{ createContext,useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
    const [categoria, setCategoria] = useState();

    return (
    <CategoryContext.Provider value={{categoria,setCategoria}}>
        {children}
    </CategoryContext.Provider>
  )
}


