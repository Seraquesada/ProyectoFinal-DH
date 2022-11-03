import React,{useState,useEffect} from 'react';
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import axios  from 'axios';
import "./SearchBar.css";

const SearchBar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [selectDisplay, setSelectDisplay] = useState("Cargando...")

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

    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Apretaste buscar");
        
    }

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
            <div className="container-forms">
                <form className="form" onSubmit={handleSubmit}>

                        <Select className='select'  options={selectDisplay} />

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
                    

                    <button className='btn btn-secondary'>Buscar</button>
                </form>
            </div>
        
    )
}

export default SearchBar