import React,{useEffect,useState,useContext} from 'react';
import Item from '../vehicle/Vehicle';
import VehicleSkeleton from "../VehicleSkeleton/VehicleSkeleton.jsx"
import { CategoryContext } from '../../context/CategoryContext';
import axios  from 'axios';
import './GroupOfVehicles.css';
import { DateContext } from '../../context/DateContext';

const GroupOfVehicles = ()=> {
  
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const {categoria,ciudad,setCategoria,  setCiudad } = useContext(CategoryContext)
  const {startDate, endDate} = useContext(DateContext)
  
  const fechaInicio = startDate?.toISOString().split("T")[0]
  const fechaFinal = endDate?.toISOString().split("T")[0]

  useEffect(()=>{
    if(categoria === undefined && ciudad === undefined && startDate === undefined){
          axios.get('http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos')
    .then(res=>{
      setData(res.data)
      setLoading(false)
    })
    }else if(categoria != undefined && ciudad === undefined && startDate === undefined){
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?categoria=${categoria}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }else if(categoria === undefined && ciudad != undefined && startDate === undefined){
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?ciudad=${ciudad}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }
    else if(categoria != undefined && ciudad != undefined && startDate === undefined){
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?categoria=${categoria}&ciudad=${ciudad}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }
    else if(categoria === undefined && ciudad === undefined && startDate != undefined && endDate != undefined){
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?fechaInicio=${startDate.toISOString().split("T")[0].split("-").join("-")}&fechaFinal=${endDate.toISOString().split("T")[0].split("-").join("-")}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }
    else if(categoria != undefined && ciudad === undefined && startDate != undefined && endDate != undefined){
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?categoria=${categoria}&fechaInicio=${startDate.toISOString().split("T")[0].split("-").join("-")}&fechaFinal=${endDate.toISOString().split("T")[0].split("-").join("-")}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }
    else if(categoria === undefined && ciudad != undefined && startDate != undefined && endDate != undefined){
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?ciudad=${ciudad}&fechaInicio=${startDate.toISOString().split("T")[0].split("-").join("-")}&fechaFinal=${endDate.toISOString().split("T")[0].split("-").join("-")}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }
    else if(categoria != undefined && ciudad != undefined && startDate != undefined && endDate != undefined){
    axios.get(`http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos/filter?categoria=${categoria}&ciudad=${ciudad}&fechaInicio=${startDate.toISOString().split("T")[0].split("-").join("-")}&fechaFinal=${endDate.toISOString().split("T")[0].split("-").join("-")}`)
      .then(res=>{
        setData(res.data)
        setLoading(false)
    })
    }
  },[categoria, ciudad, startDate, endDate])

  const handleClearFilter =() =>{
    setCiudad()
    setCategoria()
  }
  
  return(
          <div className='groupOfVehicles'>
          <div className='container-reco'>
            <h2 className='tituloReco'>{categoria !== undefined ? "Recomendaciones: "+ data.map(item => (item.categoria.titulo)).pop() : "Recomendaciones "}</h2>
            <div className='itemGroupOfVehicles'>
              {isLoading && <VehicleSkeleton  cards={4}/>}
              {
              data.length > 0 ? 
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
              :
              <>
                <h5> No hay autos disponibles en esta categoria o ciudad</h5>
                <button className='reset-form mb-4 btn btn-secondary' onClick={handleClearFilter} type="submit">Reiniciar Busqueda</button>
              </>
              }
            </div>
          </div>
        </div>
      )
      } 



export default GroupOfVehicles