import React,{useEffect,useState,useContext} from 'react';
import Item from '../vehicle/Vehicle';
import VehicleSkeleton from "../VehicleSkeleton/VehicleSkeleton.jsx"
import axios  from 'axios';
import './GroupOfVehicles.css';
import { CategoryContext } from '../../context/CategoryContext';

const GroupOfVehicles = ()=> {
  
  const [data, setData] = useState([]);
  const {categoria} = useContext(CategoryContext)
  const {ciudad} = useContext(CategoryContext)
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    if(categoria === undefined && ciudad === undefined){
          axios.get('http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos')
    .then(res=>{
      setData(res.data)
      setLoading(false)
    })
    }else if(categoria != undefined && ciudad === undefined){
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?categoria=${categoria}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }else if(categoria === undefined && ciudad != undefined){
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?ciudad=${ciudad}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }
    else{
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?categoria=${categoria}&ciudad=${ciudad}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }
  },[categoria, ciudad])

  
  
  return(
          <div className='groupOfVehicles'>
          <div className='container-reco'>
            <h2 className='tituloReco'>Recomendaciones</h2>
            <div className='itemGroupOfVehicles'>
              {isLoading && <VehicleSkeleton  cards={4}/>}
            {data?.map(singleItem=>
              <Item
                id={singleItem.id}
                key = {singleItem.id}
                url_imagen = {singleItem.imagenes[0]?.url}
                title = {singleItem.titulo}
                location ={singleItem.ciudad.nombre}
                description={singleItem.descripcion}
                category = {singleItem.categoria.titulo}
              />)}
            </div>
          </div>
        </div>
      )
      } 



export default GroupOfVehicles