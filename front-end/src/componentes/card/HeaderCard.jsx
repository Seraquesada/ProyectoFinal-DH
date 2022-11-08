import './HeaderCard.css';
import {BsChevronLeft}from 'react-icons/bs';
import { Link } from 'react-router-dom'

const HeaderCard = ({respuesta}) => {

    return(
        <div className="headerCard">
            <div>
            <div className="category-header">
            <h3> {respuesta.categoria.titulo} aca va la categoria</h3>
            <h4> {respuesta.titulo} aca va el titulo</h4>
            </div>
            </div>
                
                <Link className="flechaAtraslink" to={"/" }> <BsChevronLeft /> </Link>
            </div>
    );
};
export default HeaderCard

