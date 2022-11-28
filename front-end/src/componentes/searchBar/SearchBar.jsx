import React,{useState,useEffect, useContext} from 'react';
import { CategoryContext } from "../../context/CategoryContext";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import axios  from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";
import CalendarSearchBar from '../CalendarSearchBar/CalendarSearchBar.jsx';

const SearchBar = () => {

    const [selectDisplay, setSelectDisplay] = useState("Cargando...")
    const [userChoice, setUserChoice] = useState(undefined)
    const {setCiudad} = useContext(CategoryContext);
    /* useEffect(()=>{
        console.log(ciudad + " ciudad")
    },[ciudad]) */

    useEffect(()=>{axios.get('http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/ciudades')
        .then(res=>{
            let options = res.data;
            options.map( (c) => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        setCiudad(userChoice);
    }

    return (

        <div className="container-forms">
            <Form className="form" onSubmit={handleSubmit}>
                <CalendarSearchBar/>
                <Select placeholder="Elija una localidad..." className='select'  options={selectDisplay} onChange={(choice) => setUserChoice(choice.value)}/>
                <Button className='btn btn-secondary' type="submit">Buscar</Button>
            </Form>
        </div>
        
    )
}

export default SearchBar