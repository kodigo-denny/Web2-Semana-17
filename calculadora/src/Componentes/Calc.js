import React, {useState} from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

function Calc(props){

    const[resultado, setResultado] = useState('0')
    const[num1, setNum1] = useState(0)
    const[operacion, setOperacion] = useState('')

    function igual(){
        if(operacion!=''){
            let num2 = Number(resultado)
            let res
    
            if(operacion == '+')
                res = num1 + num2
            else if(operacion == '-')
                res = num1 - num2
            else if(operacion == '*')
                res = num1 * num2
            else if(operacion == '/')
                res = num1 / num2
    
            setNum1(res)
            setResultado(res)
        }
    }

    function operar(op){
        setOperacion(op)
        setNum1(Number(resultado))
        setResultado('0')
    }

    function punto(){
        let pos = resultado.indexOf(".")

        if(pos==-1)
            setResultado(`${resultado}.`)
    }

    function quitar(){
        let temp = resultado

        let tamaño = temp.length
        temp = temp.substring(0, tamaño-1)
        setResultado(temp=='' ? '0' : temp )
    }

    function limpiar(){
        setResultado('0')
        setNum1(0)
        setOperacion('')
    }

    function digitar(num){
        if(resultado=="0")
            setResultado(`${num}`)
        else{
            setResultado(`${resultado}${num}`)
        }
    }

    return(
        <div>
            <div className="row">
                <Pantalla resultado={resultado} />
            </div>
            <div className="row mb-2">
                <Boton col={3} evento={limpiar}>CE</Boton>
                <Boton evento={quitar}>{"<"}</Boton>
            </div>

            <div className="row mb-2">
                <Boton evento={() => digitar(7)} estilo="secondary">7</Boton>
                <Boton evento={() => digitar(8)} estilo="secondary">8</Boton>
                <Boton evento={() => digitar(9)} estilo="secondary">9</Boton>
                <Boton evento={() => operar('/')} estilo="success">/</Boton>
            </div>

            <div className="row mb-2">
                <Boton evento={() => digitar(4)} estilo="secondary">4</Boton>
                <Boton evento={() => digitar(5)} estilo="secondary">5</Boton>
                <Boton evento={() => digitar(6)} estilo="secondary">6</Boton>
                <Boton evento={() => operar('*')} estilo="success">*</Boton>
            </div>

            <div className="row mb-2">
                <Boton evento={() => digitar(1)} estilo="secondary">1</Boton>
                <Boton evento={() => digitar(2)} estilo="secondary">2</Boton>
                <Boton evento={() => digitar(3)} estilo="secondary">3</Boton>
                <Boton evento={() => operar('-')} estilo="success">-</Boton>
            </div>

            <div className="row">
                <Boton evento={() => digitar(0)} estilo="secondary">0</Boton>
                <Boton evento={punto} estilo="danger">.</Boton>
                <Boton evento={igual} estilo="warning">=</Boton>
                <Boton evento={() => operar('+')} estilo="success">+</Boton>
            </div>
        </div>
    )
}


export default Calc