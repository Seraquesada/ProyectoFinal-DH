import React,{useState,useEffect, useContext} from 'react';
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import axios  from 'axios';
import "./SearchBar.css";
import { CategoryContext } from "../../context/CategoryContext";

const SearchBar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [selectDisplay, setSelectDisplay] = useState("Cargando...")
    const {setCiudad} = useContext(CategoryContext);
    const [userChoice, setUserChoice] = useState(undefined)

    useEffect(()=>{axios.get('http://localhost:8080/ciudades')
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
                setSelectDisplay(options);
        })
    }, []);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        setCiudad(userChoice);
        
    }

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
            <div className="container-forms">
                <Form className="form" onSubmit={handleSubmit}>
                    <Select placeholder="Elija una localidad..." className='select'  options={selectDisplay} onChange={(choice) => setUserChoice(choice.value)}/>

                    <DatePicker
                        className="datepicker"
                        selected={startDate}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        showDisabledMonthNavigation
                        selectsRange
                        withPortal
                    />
                    <Button className='btn btn-secondary' type="submit">Buscar</Button>
                </Form>
            </div>
        
    )
}

export default SearchBar