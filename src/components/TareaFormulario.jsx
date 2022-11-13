import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import '../css/TareaFormulario.css';

export function TareaFormulario(props){
    const [input, setInput] = useState('');
    const cambioHandler = e => {
        setInput(e.target.value);
    }  

    const envioHandler = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    };
    return(
        <form 
            className='tarea-formulario'
            onSubmit={envioHandler}>
            <input 
                className='tarea-input'
                type='text'
                placeholder='Ingresa una tarea'
                name='texto'
                onChange={cambioHandler}
            />
            <button className='tarea-btn'>
                Agregar Tarea
            </button>
        </form>
    );
};