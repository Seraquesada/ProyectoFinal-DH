import Header from '../header/Header.jsx';
import Footer from "../footer/Footer";
import {useEffect} from 'react';
import Swal from "sweetalert2";

function ReservaExitosa(){

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
        <ReservaExitosa/>
        <Footer />
        </div>
    );
    
}

export default ReservaExitosa;