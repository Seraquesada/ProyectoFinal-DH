import React from 'react'
import Item from '../vehicle/Vehicle'
import data from '../assets/vehiculos.json'
import './groupOfVehicles.css'

const GroupOfVehicles = (props)=> {

return (

    
    <div className='groupOfVehicles'>
       <div className='container-reco'>
        <h2 className='tituloReco'>Recomendaciones</h2>
      <div className='itemGroupOfVehicles'>
      {
        data.filter(singleItem=>singleItem.category == props.categoria1).map((singleItem)=> 
        
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
    </div>
  )
}
export default GroupOfVehicles