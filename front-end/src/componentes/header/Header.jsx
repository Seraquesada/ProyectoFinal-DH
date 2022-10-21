import React,{useState,useEffect} from 'react'
import Select from 'react-select'
import "./Header.css";

const Header = () => {



    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const options = [
        {value: "buenosAires", label: "Buenos Aires"},
        {value: "laPlata", label: "La Plata"},
        {value: "comodoroRivadavia", label: "Comodoro Rivadavia"},
        {value: "salta", label: "Salta"},
        {value: "bariloche", label: "Bariloche"},
    ]
    //TODO cambiar logo
  return (
    <header>
        <div className="a">

            <div className="right-header">            
                <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
                <h4>¿Necesitas un auto? Aca te espera</h4>
            </div>
            <div className="left-header">
                <button>Iniciar Sesion</button>
                <button>Crear Cuenta</button>
            </div>
        </div>
        <nav>
            <form onSubmit={handleSubmit}>
                <Select options={options}/>
                <label htmlFor="check-in">Check-In</label>
                <input type="date" id='check-in'/>
                <label htmlFor="check-out">Check-Out</label>
                <input type="date" id='check-out'/> 
                
            </form>

        </nav>
    </header>
  )
}

export default Header