import React,{useState,useEffect} from 'react'
import "./Header.module.css";

const Header = () => {

    const [input, setInput] = useState("");
    const [auto, setAuto] = useState();
    
    const handleChange = (e) => {
        setAuto(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    //TODO cambiar logo
  return (
    <header>
        <div className="a">

            <div className>            
                <img id="logo" src="https://archive.org/download/revolt_dev_version/cover.jpg" alt="logo" />
                <h4>¿Necesitas un auto? Aca te espera</h4>
            </div>
            <div>
                <button>Iniciar Sesion</button>
                <button>Crear Cuenta</button>                
            </div>

        </div>
        <nav>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder='busca tu auto favorito' />

                <input type="date" value="check-in"/>
                <button>Buscar Auto</button>
            </form>

        </nav>
    </header>
  )
}

export default Header