import React from 'react'
import Item from '../vehicle/Vehicle'
import data from '../assets/vehiculos.json'
import './GroupOfVehicles.css'

const GroupOfVehicles = (props)=> {

return (

    
    <div className='groupOfVehicles'>
        <div className='tituloGroupOfVehicles'>
        <h2>Recomendaciones</h2>
        </div>
      <div className='itemGroupOfVehicles'>
      {
        data.filter(singleItem => singleItem.category == props.categoria1.titulo).map((singleItem)=> 
        
        <Item
          key={singleItem.id}
          url_imagen = {singleItem.url_imagen}
          category = {singleItem.category}
          title = {singleItem.title}
          location ={singleItem.location}
          description={singleItem.description}
        
        /> 
        
      )
      }</div>
    </div>
  )
}
export default GroupOfVehicles