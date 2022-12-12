import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Select from 'react-select';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CreacionProducto.css';
import { TbManualGearbox, MdAirlineSeatReclineExtra, IoSpeedometerOutline, GiGasPump, BsFillPeopleFill, MdOutlineLuggage } from 'react-icons/all'
import Swal from 'sweetalert2';


const CreacionProducto = () => {

    const navigate = useNavigate();
    const handleReDirect = () => {
        navigate("/");
    }
    const urlCiudades = 'http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/ciudades'
    const [selectDisplay1, setSelectDisplay1] = useState("Cargando...")
    const [userChoiceCity, setUserChoiceCity] = useState(undefined)

    const urlCategorias = "http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/categorias"
    const [selectDisplay2, setSelectDisplay2] = useState("Cargando...")
    const [userChoiceCategory, setUserChoiceCategory] = useState(undefined)

    useEffect(() => {
        axios.get(urlCiudades)
            .then(res => {
                let options = res.data;
                options.map((c) => {
                    c[`label`] = c.nombre;
                    c[`value`] = c.id;

                    delete c.nombre;
                    delete c.id;
                    delete c.latitud;
                    delete c.longitud;
                    return c;
                });
                options.sort((a, b) => (a.label > b.label ? 1 : -1));
                setSelectDisplay1(options);
            })
    }, []);

    useEffect(() => {
        axios.get(urlCategorias)
            .then(res => {
                let options = res.data;
                options.map((c) => {
                    c[`label`] = c.titulo;
                    c[`value`] = c.id;

                    delete c.titulo;
                    delete c.id;
                    return c;
                });
                options.sort((a, b) => (a.label > b.label ? 1 : -1));
                setSelectDisplay2(options);
            })
    }, []);


    const url = 'http://ec2-3-133-152-253.us-east-2.compute.amazonaws.com:8080/productos'
    const jwt = localStorage.getItem('jwt');

    function parseJwt(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    const [modelo, SetModelo] = useState("")
    const [descripcion, SetDescripcion] = useState("")

    const [politicas, setPoliticas] = useState(
        {
            "normasTitulo": "Normas",
            "normasDescripcion": ``,
            "seguridadTitulo": "Seguridad",
            "seguridadDescripcion": ``,
            "cancelacionTitulo": "Cancelacion",
            "cancelacionDescripcion": ``,
        }
    )

    const [imagenes, setImagenes] = useState([
        {
            "titulo": "Interior - trasero",
            "url": ``,
        },
        {
            "titulo": "Exterior - lateral",
            "url": ``,
        },
        {
            "titulo": "Interior - delantero",
            "url": ``,
        },
        {
            "titulo": "Exterior - trasero",
            "url": ``,
        },
        {
            "titulo": "Exterior - delantero",
            "url": ``,
        }
    ])

    const [caracteristicas, setCaracteristicas] = useState(
        [
            {
                "nombre": "Velocidad máxima: ",
                "valor": ``
            },
            {

                "nombre": "Cantidad de Airbags en cabina: ",
                "valor": ``
            },
            {

                "nombre": "Combustible: ",
                "valor": ``
            },
            {

                "nombre": "Transmisión: ",
                "valor": ``
            },
            {

                "nombre": "Equipaje Recomendado: ",
                "valor": ``
            },
            {

                "nombre": "Capacidad Máxima: ",
                "valor": ``
            }
        ]
    )

    const handleChangeTituloYDescription = e => {
        e.target.name === "titulo" ? SetModelo(e.target.value) : SetDescripcion(e.target.value);
    }

    const handleChangePoliticas = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPoliticas((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };


    const handleChangeImagenes = e => {
        const name = e.target.name
        const value = e.target.value

        let newImgs = [];
        imagenes.forEach(img => {
            let newObj = { ...img }
            if (newObj.titulo === name) {
                newObj.url = value

            }
            newImgs.push(newObj)
        })
        setImagenes(newImgs)
    }

    const handleChangeCaracteristicas = e => {
        const name = e.target.name.split(" ").join("")
        const value = e.target.value
        let newCaracts = [];
        caracteristicas.forEach(img => {
            let newObj = { ...img }
            if (newObj.nombre.split(" ").join("") === name) {
                newObj.valor = value

            }
            newCaracts.push(newObj)
        })
        setCaracteristicas(newCaracts)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            "titulo": `${modelo}`,
            "descripcion": `${descripcion}`,
            "ciudad": {
                "id": `${userChoiceCity}`,
            },
            "categoria": {
                "id": `${userChoiceCategory}`,
            },
            "imagenes": imagenes,
            "caracteristicas": caracteristicas,
            "politicasProducto": politicas,
            "reservas": [],
        }
        axios.post(url, payload)
            .then(function (response) {
                if(response.status === 200){
                    Swal.fire(
                        {
                            
                            text: 'Tu vehículo se ha creado con éxito.',
                            icon: 'success'
                        }
                    )
                }
            })
            .catch(function (error) {
                Swal.fire(
                    {
                        title: 'Error...',
                        text: 'No se ha podido crear tu vehículo',
                        icon: 'error'
                    }
                )
        });
    }

    return (
        <>
            <Header />
            <div className="container-producto">
                <h2>Crear Nuevo Vehículo</h2>
                <Form onSubmit={e => { handleSubmit(e) }}>

                    <Row>
                        <Form.Group as={Col}>
                            <input required placeholder="Nombre del modelo" className="titulo" type="text" name="titulo" onChange={handleChangeTituloYDescription} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <input required placeholder="Describa brevemente modelo" className="titulo" type="text" name="descripcion" onChange={handleChangeTituloYDescription} />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col}>
                            <Select  placeholder="Elija una localidad..." options={selectDisplay1} onChange={(choice) => setUserChoiceCity(choice.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Select  placeholder="Elija una categoria..." options={selectDisplay2} onChange={(choice) => setUserChoiceCategory(choice.value)} />
                        </Form.Group>
                    </Row>

                    <fieldset>
                        <legend className='grupoCaracteristicas'>Características: (máximo 6)</legend>
                        <label for="pasajeros">Pasajeros</label> <BsFillPeopleFill />
                        <input required placeholder="Cantidad de Pasajeros" name="Capacidad Máxima:" type="text" className="caracteristica" id="pasajeros" onChange={handleChangeCaracteristicas}></input>

                        <label for="equipaje">Equipaje</label> <MdOutlineLuggage />
                        <input required placeholder="Cantidad de Equipaje" name="Equipaje Recomendado:" type="text" className="caracteristica" id="Equipaje" onChange={handleChangeCaracteristicas}></input>

                        <label for="transmision">Transmision</label> <TbManualGearbox />
                        <input required placeholder="Tipo de Transmision" name="Transmisión:" type="text" className="caracteristica" id="transmision" onChange={handleChangeCaracteristicas}></input>

                        <label for="airbags">Cantidad de Airbags</label> <MdAirlineSeatReclineExtra />
                        <input required placeholder="Cantidad de Airbags" name="Cantidad de Airbags en cabina:" type="text" className="caracteristica" id="airbags" onChange={handleChangeCaracteristicas}></input>

                        <label for="velocidad">Velocidad Máxima</label>    <IoSpeedometerOutline />
                        <input required placeholder="Velocidad Máxima" name="Velocidad máxima:" type="text" className="caracteristica" id="Velocidad" onChange={handleChangeCaracteristicas}></input>

                        <label for="combustible">Combustible</label> <GiGasPump />
                        <input rows="10" cols=" 25" required placeholder="Tipo de Combustible" name="Combustible:" type="text" className=" caracteristica" id="caracterisitica" onChange={handleChangeCaracteristicas}></input>
                    </fieldset>

                    <fieldset>
                        <legend className='grupoPoliticas'>Políticas </legend>
                        <textarea rows="5" cols="40" required placeholder="Complete Normas Generales del Vehículo..." className="politicas" type="text" name="normasDescripcion" onChange={handleChangePoliticas} />
                        <textarea rows="5" cols="40" required placeholder="Complete Políticas de Seguridad..." className="politicas" type="text" name="seguridadDescripcion" onChange={handleChangePoliticas} />
                        <textarea rows="5" cols="40" required placeholder="Complete Políticas de Cancelación..." className="politicas" type="text" name="cancelacionDescripcion" onChange={handleChangePoliticas} />
                    </fieldset>

                    <fieldset>
                        <legend className='grupoImagenes'>Imagenes </legend>
                        <textarea rows="1" cols="40" required placeholder="Copie la URL de la imagen principal" className="imagenes" type="url" name="Interior - trasero" onChange={handleChangeImagenes} />
                        <textarea rows="1" cols="40" required placeholder="Copie la URL de la siguiente imagen " className="imagenes" type="url" name="Exterior - lateral" onChange={handleChangeImagenes} />
                        <textarea rows="1" cols="40" required placeholder="Copie la URL de la siguiente imagen " className="imagenes" type="url" name="Interior - delantero" onChange={handleChangeImagenes} />
                        <textarea rows="1" cols="40" required placeholder="Copie la URL de la siguiente imagen " className="imagenes" type="url" name="Exterior - trasero" onChange={handleChangeImagenes} />
                        <textarea rows="1" cols="40" required placeholder="Copie la URL de la siguiente imagen " className="imagenes" type="url" name="Exterior - delantero" onChange={handleChangeImagenes} />
                    </fieldset>

                    <div className='d-flex justify-content-around'>
                        <button className='btn btn-warning' type={"submit"}>Crear Producto</button>
                        <Button onClick={handleReDirect} className={"btn btn-danger"}>Volver al Inicio</Button>
                    </div>

                </Form>
            </div>
            <Footer />
        </>
    )
}

export default CreacionProducto