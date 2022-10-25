import React,{useState} from 'react'
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import ciudades from '../../assets/ciudades.json'
import "./SearchBar.css"

const SearchBar = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div className="container">    
            <div className="container-forms">
                <form className="form" onSubmit={handleSubmit}>
                    <Select className="select" options={ciudades}/>
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
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