import React, {useState} from "react";

function Contador(){

const [numero, setNumero] = useState(0)

function Adicionar(){

    if(numero <25){
        setNumero(numero+1)
    }
   
}

function Subtrair(){

    if(numero > 0){
    setNumero(numero - 1)
    }
}

function Zerar (){
    setNumero(numero - numero)
}

    return(
        <>
        <h2> {numero} </h2>
        <button onClick={Adicionar}> + </button>
        <button onClick={Subtrair}> - </button>
        <button onClick={Zerar}> Zerar </button>
        </>
    )
}
export default Contador
