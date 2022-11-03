import React,{useEffect,useState} from 'react'
import Item from '../vehicle/Vehicle'
import axios  from 'axios';
import './groupOfVehicles.css'

const GroupOfVehicles = (props)=> {

    const [data, setData] = useState([]);

    useEffect(()=>{
    axios.get('http://localhost:8080/productos')
    .then(res=>{
      setData(res.data)
    })
    },[])
  const jwt = localStorage.getItem('jwt')
  
  const RandomCategory = () =>{
          return(
              <div className='groupOfVehicles'>
        <div className='container-reco'>
          <h2 className='tituloReco'>Recomendaciones</h2>
        <div className='itemGroupOfVehicles'>
        {         
          data?.map((singleItem)=>
          <Item
            id={singleItem.id}
            key = {singleItem.id}
            url_imagen = {singleItem.url_imagen}
            category = {singleItem.categoria.titulo}
            title = {singleItem.titulo}
            location ={singleItem.ciudad.nombre}
            description={singleItem.descripcion}
          />)
        }
        </div>
        </div>
      </div>
      )
  }

  const FilterCategory = () =>{
          return(
        <div className='groupOfVehicles'>
          <div className='container-reco'>
            <h2 className='tituloReco'>Recomendaciones por Categoria</h2>
          <div className='itemGroupOfVehicles'>
          {
            data?.
            filter(singleItem=>
            singleItem.categoria.titulo === props.categoria1)
            .map((singleItem)=> 
            <Item
              id={singleItem.id}
              key = {singleItem.id}
              url_imagen = {singleItem.url_imagen}
              category = {singleItem.categoria.titulo}
              title = {singleItem.titulo}
              location ={singleItem.ciudad.nombre}
              description={singleItem.descripcion}
            /> 
            )
          }
          </div>
          </div>
        </div>
      )
  }

    if(!jwt){
      return (
      <>
        <RandomCategory/>
        <FilterCategory/>
      </>
      )
    }
    else{
      return <FilterCategory/>
    }
}
export default GroupOfVehicles