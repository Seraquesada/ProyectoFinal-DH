import React from 'react'
import Item from '../item/Item'
import data from '../assets/categorias.json'
import './Category.css'

const Category = ()=> {

return (

    
    <div className='category'>
      {
        
      data.map((singleItem)=> 
        <Item
          url_imagen = {singleItem.url_imagen}
          key={singleItem.id}
          titulo = {singleItem.titulo}
          descripcion={singleItem.descripcion}
        
        /> 
      )
      }
    </div>
  )
}
export default Category