import React, {useState, useEffect} from 'react'

function App(){

    const[numero, setNumero] = useState(0)
    const[numero2, setNumero2] = useState(0)

    useEffect(() =>{
        console.log("Siempre se ejecuta")
    })

    useEffect(() => {
        console.log("Cambio el estado")
    },[numero2])

    useEffect(() => {
        console.log("Se ejecuta una vez")
    }, [])

    function aumentar(){
        setNumero(numero+1)
    }

    function disminuir(){
        setNumero(numero-1)
    }

    function reset(){
        setNumero(0)
        setNumero2(numero2+1)
    }

    return(
        <div>
            <input type="text" className='form-control' value={numero} readOnly />
            <button className='btn btn-primary' onClick={disminuir}>-</button>
            <button className='btn btn-danger' onClick={reset}>Reset</button>
            <button className='btn btn-secondary' onClick={aumentar}>+</button>
        </div>
    )
}

export default App