import { React, useEffect, useState } from 'react';
import ItemCategory from '../item/ItemCategory';
import CategorySkeleton from "../CategorySkeleton/CategorySkeleton.jsx"
import axios from 'axios';
import './Category.css';

const Category = ()=> {
  const [data1, setData1] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(()=>{
  axios.get('http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/categorias')
  .then(res=> {   
      const datos = res.data
      setData1(datos)
      setLoading(false)
    })},[])
  
  return (
      <div className='category'>
        <div className='container-category'>
          <div className='tituloCategoria'>
          <h2>Selecciona una categoria</h2>
          </div>
        <div className='itemCategoria'>
          {isLoading && <CategorySkeleton cards={4}/>}
          {data1?.map((item) => 
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