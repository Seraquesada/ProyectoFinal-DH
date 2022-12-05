import React,{useEffect, useState} from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Select from 'react-select';
import axios from 'axios';
import Form  from 'react-bootstrap/Form';
import { useAxiosGet } from '../../hooks/useAxiosGet';
import './CreacionProducto.css';
import {TbManualGearbox,MdAirlineSeatReclineExtra,IoSpeedometerOutline,GiGasPump,BsFillPeopleFill,MdOutlineLuggage} from 'react-icons/all'


const CreacionProducto = () => {
    
    const urlCiudades =  'http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/ciudades'
    const [selectDisplay1, setSelectDisplay1] = useState("Cargando...")
    const [userChoiceCity, setUserChoiceCity] = useState(undefined)
    const [ciudad, setCiudad] = useState(undefined)
    
    
    const urlCategorias ="http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/categorias"
    const [selectDisplay2, setSelectDisplay2] = useState("Cargando...")
    const [userChoiceCategory, setUserChoiceCategory] = useState(undefined)
    const [categoria, setCategoria] = useState(undefined)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setCiudad(userChoiceCity);
        setCategoria(userChoiceCategory);
        console.log(payload)
    }

    useEffect(()=>{axios.get(urlCiudades)
    .then(res=>{
        let options = res.data;
        options.map((c) => {
            c[`label`] = c.nombre;
            c[`value`] = c.id;

            delete c.nombre;
            delete c.id;
            delete c.latitud;
            delete c.longitud;
            return c;
            });
        options.sort((a, b) => (a.label > b.label ? 1 : -1));
        setSelectDisplay1(options);
        })
    }, []);

    useEffect(()=>{axios.get(urlCategorias)
        .then(res=>{
            let options = res.data;
            options.map((c) => {
                c[`label`] = c.titulo;
                c[`value`] = c.id;
    
                delete c.titulo;
                delete c.id;
                return c;
                });
            options.sort((a, b) => (a.label > b.label ? 1 : -1));
            setSelectDisplay2(options);
            })
        }, []);
    

        const url = 'http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos'
        const jwt= localStorage.getItem('jwt');
    
        function parseJwt (token) {
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
        
        const[modelo,SetModelo]=useState(undefined)
        const[descripcion,SetDescripcion]=useState(undefined)
        const[tituloImagen1,SetTituloImagen1]=useState(undefined)
        const[urlImagen1,SetUrlImagen1]=useState(undefined)
        const[tituloImagen2,SetTituloImagen2]=useState(undefined)
        const[urlImagen2,SetUrlImagen2]=useState(undefined)
        const[tituloImagen3,SetTituloImagen3]=useState(undefined)
        const[urlImagen3,SetUrlImagen3]=useState(undefined)
        const[tituloImagen4,SetTituloImagen4]=useState(undefined)
        const[urlImagen4,SetUrlImagen4]=useState(undefined)
        const[tituloImagen5,SetTituloImagen5]=useState(undefined)
        const[urlImagen5,SetUrlImagen5]=useState(undefined)
        const[normas,SetNormas]=useState(undefined)
        const[seguridad,SetSeguridad]=useState(undefined)
        const[cancelacion,SetCancelacion]=useState(undefined)
        const[pasajeros,SetPasajeros]=useState(undefined) 
        const[equipaje,SetEquipaje]=useState(undefined)
        const[transmision,SetTransmision]=useState(undefined) 
        const[velocidad,SetVelocidad]=useState(undefined) 
        const[combustible,SetCombustible]=useState(undefined) 
        const[airbags,SetAirbags]=useState(undefined)
        
        
        const payload = {
            "titulo" : `${modelo}`,
            "descripcion" : `${descripcion}`,
            "ciudad" : {
                "id":`${ciudad}`,
            },
            "categoria":{
                "id":`${categoria}`,
            },
            "imagenes":[
                {
                
                "url": `${urlImagen1}`,
            },
            
                {
                
                "url": `${urlImagen2}`,
            },
            
                {
                
                "url": `${urlImagen3}`,
            },
                {

                "url": `${urlImagen4}`,
            },
            
                {
                
                "url": `${urlImagen5}`,
            }
        ],
        "caracteristicas":[
            {
                "nombre": "Velocidad máxima: ",
                "valor": `${velocidad}`
            },
            {
                
                "nombre": "Cantidad de Airbags en cabina: ",
                "valor": `${airbags}`
            },
            {
                
                "nombre": "Combustible: ",
                "valor": `${combustible}`
            },
            {
                
                "nombre": "Transmisión: ",
                "valor": `${transmision}`
            },
            {
                
                "nombre": "Equipaje Recomendado: ",
                "valor": `${equipaje}`
            },
            {
                
                "nombre": "Capacidad Máxima: ",
                "valor": `${pasajeros}`
            }
        ],
        "politicasProducto": {
            
                "normasTitulo": "Normas",
                "normasDescripcion": `${normas}`,
                "seguridadTitulo": "Seguridad",
                "seguridadDescripcion": `${seguridad}`,
                "cancelacionTitulo": "Cancelacion",
                "cancelacionDescripcion": `${cancelacion}`,
        },
        "reservas": []
    }
    console.log(payload)
        
        const guardarProducto = () => {
            
            axios.post(url, payload)
            .then(function (response) {
                if(response.status === 200){
                    confirm("Se ha registrado el producto con exito")
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        }
    


    return (
    <>
        <Header/>
        <div>
            <h2>Crear Auto</h2>
            <Form onSubmit={ev =>{
                ev.preventDefault();
                SetModelo(ev.target.modelo.value);
                SetDescripcion(ev.target.descripcion.value);
                SetUrlImagen1(ev.target.urlImagen1.value);
                SetUrlImagen2(ev.target.urlImagen2.value);
                SetUrlImagen3(ev.target.urlImagen3.value);
                SetUrlImagen4(ev.target.urlImagen4.value);
                SetUrlImagen5(ev.target.urlImagen5.value);
                SetNormas(ev.target.normas.value);
                SetSeguridad(ev.target.seguridad.value);
                SetCancelacion(ev.target.cancelacion.value);
                SetPasajeros(ev.target.pasajeros.value);
                SetEquipaje(ev.target.equipaje.value);
                SetTransmision(ev.target.transmision.value);
                SetAirbags(ev.target.airbags.value);
                SetVelocidad(ev.target.velocidad.value);
                SetCombustible(ev.target.combustible.value);

                guardarProducto}}>

                <Select placeholder="Elija una localidad..." className='select'  options={selectDisplay1} onChange={(choice) => setUserChoiceCity(choice.value(id))}/>
                <Select placeholder="Elija una categoria..." className='select'  options={selectDisplay2} onChange={(choice) => setUserChoiceCategory(choice.value(id))}/>
                <input placeholder="Nombre del modelo" className="select" type="text" name ="modelo" size="20"/>
                <input placeholder="Describa brevemente modelo" className="select" type="text" name="descripcion" size="50"/>
                <fieldset>
                    <legend className='grupoCaracteristicas'>Características: ( No mas de 6)</legend>

                    <label for="pasajeros">Pasajeros</label> <BsFillPeopleFill/>
                    <input type="checkbox" name="pasajerosOk" id="pasajeros"></input>
                    <input placeholder="Cantidad de pasajeros" name="pasajeros" type="text" className="caracteristica" id="pasajeros"></input>
                    
                    
                    <label for="equipaje">Equipaje</label> <MdOutlineLuggage/>
                    <input type="checkbox" name="equipajeOk" id="Equipaje"></input>
                    <input placeholder="Cantidad de Equipaje" name="equipaje" type="text" className="caracteristica" id="Equipaje"></input>
                    
                    
                    <label for="transmision">Transmision</label> <TbManualGearbox/>
                    <input type="checkbox" name="transmisionOk" id="transmision"></input>
                    <input placeholder="Describa la Transmision" name="transmision" type="text" className="caracteristica" id="transmision"></input>
                    
                    
                    <label for="airbags">Cantidad de Airbags</label> <MdAirlineSeatReclineExtra/>
                    <input type="checkbox" name="airbagsOk" id="airbags"></input>
                    <input placeholder="Cantidad de airbags" name="airbags"type="text" className="caracteristica" id="airbags"></input>
                    
                    
                    <label for="velocidad">Velocidad Máxima</label>    <IoSpeedometerOutline/>
                    <input type="checkbox" name="velocidadOk" id="Velocidad"></input>
                    <input placeholder="Velocidad Máxima" name="velocidad" type="text" className="caracteristica" id="Velocidad"></input>
                    
                    <label for="combustible">Combustible</label> <GiGasPump/>
                    <input type="checkbox" name="combustibleOk" id="combustible"></input>
                    <input rows="10" cols=" 25" placeholder="Describa el combustible" name="combustible" type="text" className=" caracteristica" id="caracterisitica"></input>
                    
                </fieldset>
                <fieldset>
                    <legend className='grupoPoliticas'>Políticas </legend>
                    <textarea  rows="5" cols="40" placeholder="Complete Normas del vehículo..." className="politicas" type="text" name="normas"/>
                    <textarea  rows="5" cols="40" placeholder="Complete Seguridad..." className="politicas" type="text"  name="seguridad"/>
                    <textarea  rows="5" cols="40" placeholder="Complete Cancelación..." className="politicas" type="text"  name="cancelacion"/>
                </fieldset>              
                
                <fieldset>
                    <legend className='grupoImagenes'>Imagenes </legend>
                    <textarea  rows="1" cols="40" placeholder="Copie la URL de la imagen principal" className="imagenes" type="url" name="urlImagen1"/>
                    <textarea  rows="1" cols="40" placeholder="Copie la URL de la siguiente imagen" className="imagenes" type="url" name="urlImagen2"/>
                    <textarea  rows="1" cols="40" placeholder="Copie la URL de la siguiente imagen" className="imagenes" type="url" name="urlImagen3"/>
                    <textarea  rows="1" cols="40" placeholder="Copie la URL de la siguiente imagen" className="imagenes" type="url" name="urlImagen4"/>
                    <textarea  rows="1" cols="40" placeholder="Copie la URL de la siguiente imagen" className="imagenes" type="url" name="urlImagen5"/>
                </fieldset>    
                
                <button className='btn btn-primary'>Guardar Producto</button>  
            
            </Form>
        </div>
        <Footer/>
    </>
)
}

export default CreacionProducto