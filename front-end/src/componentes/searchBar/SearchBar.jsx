import React,{useState,useEffect} from 'react'
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css";
import ciudades from '../../assets/ciudades.json'
import axios  from 'axios';
import "./SearchBar.css"

const SearchBar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [city, setCity] = useState();

    let options = [];

    useEffect(()=>{axios.get('http://localhost:8080/ciudades')
        .then(res=>{
            let aaa =  res.data.map(c =>{
                c.label = c.nombre
                delete c.nombre
                return c;
                    })
            options=[aaa]
        })
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        /*let payload = {
            "ciudad": city,
            "startDate": startDate,
            "endDate": endDate 
        }*/
        
    }

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleCityChange = (e) =>{
        console.log(e)
        setCity(e.id)
    }
    const customStyles = {
        option: (provided) => ({
            ...provided,
            padding: 10
        })}

    return (
            <div className="container-forms">
                <form className="form" onSubmit={handleSubmit}>

                        <Select
                        styles={customStyles}
                        placeholder="Elija localidad" 
                        className="select" 
                        label="nombre"
                        options={options}
                        onChange={handleCityChange}
                        />

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