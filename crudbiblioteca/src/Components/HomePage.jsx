import React from "react";
import {Link} from "react-router-dom"
import Menu from "./Menu";

function HomePage(){

    return(
        <div>
            <Menu />
            <h1>Home</h1>
            <Link to="/" >Home</Link>
            <Link to="/autores">Autores</Link>
        </div>
    )
}

export default HomePage