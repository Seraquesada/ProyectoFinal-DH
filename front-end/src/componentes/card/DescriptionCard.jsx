import './DescriptionCard.css'

const DescriptionCard = ({respuesta}) => {
    return(
        <div className="descriptionCard">
            <h3> {respuesta.titulo}</h3>
            <p> {respuesta.descripcion}</p>
        </div>
    );
};
export default DescriptionCard
