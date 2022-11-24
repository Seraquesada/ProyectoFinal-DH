import Header from '../header/Header.jsx';
import Footer from "../footer/Footer";
import {useEffect} from 'react';
import Swal from "sweetalert2";

function reservaExitosa(){

    useEffect(()=>{
        mostrarAlerta();
    }, []);

    const mostrarAlerta=()=>{

        Swal.fire(
            '¡Muchas gracias!','Su reserva se ha realizado con éxito','success'
        )
    }

    return (
        <div>
        <Header />
        <reservaExitosa/>
        <Footer />
        </div>
    );
    
}

export default reservaExitosa;