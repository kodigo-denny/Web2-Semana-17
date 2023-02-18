import React, {useEffect, useState} from "react";
import Menu from "./Menu"


function AutoresForm(){

    const[nombre, setNombre] = useState("")
    const[apellido, setApellido] = useState("")
    const[pais, setPais] = useState("")

    useEffect(() =>{
        console.log(nombre)
    },[nombre])

    return(
        <div>
            <Menu />
            <h1>Add</h1>
            <form id="formulario">
                <div className="form-group">
                    <label className="form-label">Nombre:</label>
                    <input className="form-control" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default AutoresForm