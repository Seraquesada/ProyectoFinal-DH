import ItemCategory from '../item/ItemCategory'
import './category.css'
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Category = (props)=> {
  const [data1, setData1] = useState(null);
  const [isLoading, setLoading] = useState(true);
  
  
useEffect(()=>{
  axios.get('http://localhost:8080/categorias')
  .then(res=> 
  {
      let datos = res.data
      setData1(datos)
      setLoading(false)
  }
  )}, [])


  if (isLoading) {
    console.debug("renders: Loading...");
    return <Spinner animation="border" size="sm" />;
  }
return (
    
    
    <div className='category'>
      <div className='container-category'>
        <div className='tituloCategoria'>
        <h2>Selecciona la categoria</h2>
        </div>
      <div className='itemCategoria'>
      
      {
      data1?.map((item) => 
        <ItemCategory
          url_imagen = {item.urlImagen}
          key={item.id}
          titulo = {item.titulo}
          descripcion={item.descripcion}
          cambioCategoria={props.cambioCategoria}
        /> 
      )
      }</div>
      </div>
    </div>
      
  )
}
export default Category