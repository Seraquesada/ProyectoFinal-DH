import React,{useEffect,useState,useContext} from 'react';
import Item from '../vehicle/Vehicle';
import axios  from 'axios';
import './groupOfVehicles.css';
import { CategoryContext } from '../../context/CategoryContext';

const GroupOfVehicles = ()=> {
  
  const [data, setData] = useState([]);
  const {categoria} = useContext(CategoryContext)
  const {ciudad} = useContext(CategoryContext)

  useEffect(()=>{
    if(categoria === undefined && ciudad === undefined){
          axios.get('ec2-3-134-86-241.us-east-2.compute.amazonaws.com:8080/productos')
    .then(res=>{
      setData(res.data)
    })
    }else if(categoria != undefined && ciudad === undefined){
    axios.get(`ec2-3-134-86-241.us-east-2.compute.amazonaws.com:8080/productos/filter?categoria=${categoria}`)
      .then(res=>{
        setData(res.data)
    })
    }else if(categoria === undefined && ciudad != undefined){
    axios.get(`ec2-3-134-86-241.us-east-2.compute.amazonaws.com:8080/productos/filter?ciudad=${ciudad}`)
      .then(res=>{
        setData(res.data)
    })
    }
    else{
    axios.get(`ec2-3-134-86-241.us-east-2.compute.amazonaws.com:8080/productos/filter?categoria=${categoria}&ciudad=${ciudad}`)
      .then(res=>{
        setData(res.data)
    })
    }
  },[categoria, ciudad])

  
  
  const RandomCategory = () =>{
        return(
          <div className='groupOfVehicles'>
          <div className='container-reco'>
            <h2 className='tituloReco'>Recomendaciones</h2>
            <div className='itemGroupOfVehicles'>
            {         
              data?.map(singleItem=>
              <Item
                id={singleItem.id}
                key = {singleItem.id}
                url_imagen = {singleItem.imagenes[0]?.url}
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