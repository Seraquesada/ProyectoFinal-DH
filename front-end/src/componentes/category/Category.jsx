import React from 'react';
import ItemCategory from '../item/ItemCategory';
import CategorySkeleton from "../CategorySkeleton/CategorySkeleton.jsx"

import './Category.css';
import { useAxiosGet } from '../../hooks/useAxiosGet';

const Category = ()=> {
  
  const url ='http://ec2-3-134-86-241.us-east-2.compute.amazonaws.com:8080/categorias'
  const {respuesta,isLoading} = useAxiosGet(url)
  
  return (
      <div className='category'>
        <div className='container-category'>
          <div className='tituloCategoria'>
          <h2>Selecciona una categoria</h2>
          </div>
        <div className='itemCategoria'>
          {isLoading && <CategorySkeleton cards={4}/>}
          {respuesta?.map((item) => 
            <ItemCategory
              url_imagen = {item.urlImagen}
              key={item.id}
              id={item.id}
              titulo = {item.titulo}
              descripcion={item.descripcion}
            />)}
        </div>
        </div>
      </div>
    )
}
export default Category;