import React, {useState} from "react";

const Task = ({tarea, borrarTarea}) => {
    const [completada, setCompletada] = useState(false)

    return(
        <div className="task">
            <h2 className={completada ? "completed-text" : ""}>{tarea.tarea}</h2>
            <input 
            type="checkbox"
            checked={completada} 
            onChange={()=>setCompletada (!completada)}/>
            <button className="delete" onClick= {() => borrarTarea(tarea.id)}>Delete</button>
        </div>
    )
   
}

export default Task;