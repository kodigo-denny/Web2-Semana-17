import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Tabla({filas, campos}){

    useEffect(() => {

    }, [])

    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td><Link to="/autores/Add" className="btn btn-success">Nuevo</Link></td>
                        {campos.map((value, index) => {
                            return <th key={index}>{value}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    
                        {filas.map((value, index) => {
                            return <tr key={index}>
                                <td>
                                    <Link className="btn btn-primary">Editar</Link>
                                    <Link className="btn btn-danger">Eliminar</Link>
                                </td>
                                {Object.values(value).map((value2, index2) => {
                                    return <td key={index2}>{value2}</td>
                                })}
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default Tabla