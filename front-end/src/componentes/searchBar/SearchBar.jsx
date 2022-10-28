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
        


    
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            "ciudad": city,
            "startDate": startDate,
            "endDate": endDate 
        }
    }

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleCityChange = (e) =>{
        setCity(e.value)
        
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
                    

                    <button className='btn btn-secondary'>Buscar</button>
                </form>
            </div>
        
    )
}

export default SearchBar