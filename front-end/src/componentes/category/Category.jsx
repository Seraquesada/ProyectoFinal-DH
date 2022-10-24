import React from 'react'
import Item from '../item/ItemCategory'
import data from '../assets/categorias.json'
import './Category.css'

const Category = ()=> {

return (

    
    <div className='category'>
        <div className='tituloCategoria'>
        <h2>Selecciona la categoria</h2>
        </div>
      <div className='itemCategoria'>
      {
        data.map((singleItem)=> 
        <Item
          url_imagen = {singleItem.url_imagen}
          key={singleItem.id}
          titulo = {singleItem.titulo}
          descripcion={singleItem.descripcion}
        
        /> 
      )
      }</div>
    </div>
  )
}
export default Category