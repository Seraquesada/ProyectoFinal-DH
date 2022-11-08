import './DescriptionCard.css'

const DescriptionCard = ({respuesta}) => {
    return(
        <div className="descriptionCard">
            <h3> {respuesta.titulo} aca va el titulo</h3>
            <p> {respuesta.descripcion} "ACA VA EL TEXTO" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, cupiditate? Voluptatibus laborum corrupti beatae eligendi similique, vel, pariatur ipsum nulla voluptates cupiditate, consequatur itaque repudiandae molestias vitae in. Dolorem, dolorum?</p>
        </div>
    );
};
export default DescriptionCard
