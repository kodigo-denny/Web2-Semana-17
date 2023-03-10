import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AutoresCrud from "./AutoresCrud";
import AutoresForm from "./AutoresForm";
import HomePage from "./HomePage"
import LibroCrud from "./LibrosCrud";

function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/autores" element={<AutoresCrud />} />
                <Route path="/libros" element={<LibroCrud />} />
                <Route path="/autores/Add" element={<AutoresForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App