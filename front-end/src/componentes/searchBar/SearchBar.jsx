import React,{useState,useEffect, useContext} from 'react';
import { CategoryContext } from "../../context/CategoryContext";

import { useDateChange} from '../../hooks/useDateChange';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import axios  from 'axios';

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";

const SearchBar = () => {

    const [selectDisplay, setSelectDisplay] = useState("Cargando...")
    const [userChoice, setUserChoice] = useState(undefined)
    
    const {setCiudad} = useContext(CategoryContext);
    
    const {startDate, handleDateChange, endDate} = useDateChange();

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

    const holidays = [
        new Date(2022, 10, 14),
        new Date(2022, 11, 11),
        new Date(2022, 10, 28),
        new Date(2022, 12, 25),
        new Date(2022, 1, 1),
        new Date(2022, 1, 20),
        new Date(2022, 2, 17),
        new Date(2022, 5, 25),
        new Date(2022, 7, 3),
        new Date(2022, 9, 7)
    ];
    
    return (
            <div className="container-forms">
                <Form className="form" onSubmit={handleSubmit}>
                    <Select placeholder="Elija una localidad..." className='select'  options={selectDisplay} onChange={(choice) => setUserChoice(choice.value)}/>
                    <DatePicker
                        className="datepicker"
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        showDisabledMonthNavigation
                        selectsRange
                        withPortal
                        excludeDates={holidays}
                    />
                    
                    <Button className='btn btn-secondary' type="submit">Buscar</Button>
                </Form>
            </div>
        
    )
}

export default SearchBar