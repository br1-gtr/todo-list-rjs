import React from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../css/Tarea.css';
export function Tarea({ id, texto, completada, completarTarea, eliminarTarea }){
    //no suma clase COMPLETADA...
    return(
        <div className={completada ? 'tarea-contenedor completada': 'tarea-contenedor'}>
            <div 
                className='tarea-txt'
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div 
                className='tarea-contenedor-icon'
                onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icon'/>
            </div>
        </div>
    );
};