import React,{useEffect,useState,useContext} from 'react'
import Item from '../vehicle/Vehicle'
import axios  from 'axios';
import './groupOfVehicles.css'
import { CategoryContext } from '../../context/CategoryContext';

const GroupOfVehicles = ()=> {
  
  const [data, setData] = useState([]);
  const {categoria} = useContext(CategoryContext)
  const jwt = localStorage.getItem('jwt')
  
  useEffect(()=>{
    if(categoria === undefined){
          axios.get('http://localhost:8080/productos')
    .then(res=>{
      setData(res.data)
    })
    }else{
    axios.get(`http://localhost:8080/productos/filter?categoria=${categoria}`)
      .then(res=>{
        setData(res.data)
    })
    }
  },[categoria])

  
  
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
                title = {singleItem.titulo}
                location ={singleItem.ciudad.nombre}
                description={singleItem.descripcion}
                category = {singleItem.categoria.titulo}
              />)
            }
            </div>
          </div>
        </div>
      )
      } 

      return (<RandomCategory/>)
  

}
export default GroupOfVehicles