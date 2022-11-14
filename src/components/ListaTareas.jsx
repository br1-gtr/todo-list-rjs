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

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter( tarea => tarea.id !== id ); //genera un array sin la tarea a eliminar
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if ( tarea.id === id ){
                console.log(tarea);
                tarea.completada = !tarea.completada;
                console.log(tarea);
            }
            return tarea;
        });
        setTareas(tareasActualizadas)
        console.log(tareasActualizadas);
    }

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
                            completada={false} 
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea} />
                    )
                }   
            </div>
        </>
    );
};

export default ListaTareas;