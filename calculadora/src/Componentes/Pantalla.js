import React from "react";

function Pantalla(props){

    return(
        <div className="col-12">
            <input type="text" id="pantalla" readOnly value={props.resultado} style={{textAlign: 'right', fontSize: 40}} className="form-control" />
        </div>
    )
}


export default Pantalla