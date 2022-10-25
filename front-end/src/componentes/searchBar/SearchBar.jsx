import React,{useState} from 'react'
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css";
import ciudades from '../../assets/ciudades.json'
import "./SearchBar.css"

const SearchBar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [city, setCity] = useState({} );
        
    let payload = {
            "ciudad": city,
            "fechaInicio": startDate,
            "fechaFinal": endDate 
        }
    console.log(payload);
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleCityChange = (e) =>{
        setCity(e.value)
        
    }

    return (
        <div className="container">    
            <div className="container-forms">
                <form className="form" onSubmit={handleSubmit}>
                    <Select
                    placeholder="Eliga localidad" 
                    className="select mb-2" 
                    options={ciudades}
                    onChange={handleCityChange}
                    />
                    
                    <DatePicker
                        className="datepicker"
                        selected={startDate}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        withPortal
                        selectsRange
                        />
                    <button className='buscar'>Buscar</button>
                </form>
            </div>
            <div className="title">
                <h1>
                    Re-Volts Rental
                </h1>
                <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
            </div>
        </div>
    )
}

export default SearchBar