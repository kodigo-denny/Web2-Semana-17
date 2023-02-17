import React from "react";

function Boton(props){

    return(
        <button onClick={props.evento} className={`btn btn-${props.estilo==undefined ? 'primary' : props.estilo} col-${props.col==undefined ? 3 : props.col*3}`}>
            {props.children}
        </button>
    )
}

export default Boton