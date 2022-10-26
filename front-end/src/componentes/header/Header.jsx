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

  return (
    <header>
        <div className="a">

            <div className="hola">            
                
                <h4>¿Necesitas un auto? Aca te espera</h4>
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