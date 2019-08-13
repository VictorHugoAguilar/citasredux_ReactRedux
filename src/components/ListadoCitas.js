import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { borrarCitaAction } from '../actions/citasActions'

const ListadoCitas = () => {
    // Obtener las citas del state
    const citas = useSelector(state => state.citas.citas);

    // Mensaje condicional
    const mensaje = Object.keys(citas).length === 0
            ? "No hay Citas"
            : "Administra las citas Aquí";

    // Dispatch para mandar a llamar la acion de eliminar
    const dispatch = useDispatch();



    return (
        <div className="card mt-5">
            <div className="car-bodu">
                <h2 className="card-title text-center mt-3" > {mensaje} </h2>
                <div className="lista-citas">
                    {citas.map(cita => (
                        <div key={cita.id} className="media mt-3 ml-2">
                            <div className="media-body">
                                <h3 className="mt-0">{cita.mascota}</h3>
                                <p className="card-text">
                                    <span>Nombre Dueño:</span>
                                    {cita.propietario}
                                </p>
                                <p className="card-text">
                                    <span>Fecha:</span>
                                    {cita.fecha}
                                </p>
                                <p className="card-text">
                                    <span>Hora:</span> {cita.hora}{" "}
                                </p>
                                <p className="card-text">
                                    <span>Sintomas:</span> <br />{" "}
                                    {cita.sintomas}{" "}
                                </p>
                                <button className="btn btn-danger"
                                    onClick={() => dispatch(borrarCitaAction(cita.id)) }
                                >
                                    Borrar &times;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListadoCitas;
