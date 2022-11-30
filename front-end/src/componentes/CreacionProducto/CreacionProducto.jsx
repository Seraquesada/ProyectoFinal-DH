import React,{useEffect, useState} from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Select from 'react-select';
import axios from 'axios';
import Form  from 'react-bootstrap/Form';
import { useAxiosGet } from '../../hooks/useAxiosGet';

const CreacionProducto = () => {
    
    const urlCiudades =  'http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/ciudades'
    const [selectDisplay, setSelectDisplay] = useState("Cargando...")
    const [userChoiceCity, setUserChoiceCity] = useState(undefined)

    const [ciudad, setCiudad] = useState(undefined)
    const urlCategorias ="http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/categorias"
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setCiudad(userChoiceCity);
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
        setSelectDisplay(options);
        })
    }, []);

    return (
    <>
        <Header/>
        <div>
            <h2>Crear Auto</h2>
            <Form onSubmit={handleSubmit}>
                <Select placeholder="Elija una localidad..." className='select'  options={selectDisplay} onChange={(choice) => setUserChoiceCity(choice.value)}/>
            </Form>
        </div>
        <Footer/>
    </>
  )
}

export default CreacionProducto