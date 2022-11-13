import React from "react";
import { TareaFormulario } from "./TareaFormulario";
import { Tarea } from "./Tarea";
import { useState } from "react";
import '../css/ListaTareas.css';

function ListaTareas() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log(tarea);
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            console.log('tareas act', tareasActualizadas);
            setTareas(tareasActualizadas);
        }
    };

    return(
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-cont'>
                {
                    tareas.map( tarea =>
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={false} />
                    )
                }   
            </div>
        </>
    );
};

export default ListaTareas;