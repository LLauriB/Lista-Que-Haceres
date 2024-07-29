import Form from './Formulario/form';
import './App.css';
import React, {useState} from 'react';
import Task from './toDoList/task';

function App() {

  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleChange = (e) =>{
    setTarea(e.target.value)
  }

  const addTask = (e) => {
    e.preventDefault ();

    const nuevaTarea = {
      id: Date.now(),
      tarea:tarea,
      completada: false
    }

    const totalTareas = [nuevaTarea, ...tareas]
    setTareas(totalTareas);
    setTarea("");

  }

  const borrarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea =>{
      return tarea.id !== id;
    })
    setTareas(tareasActualizadas)
  }
    
  return (
    <div className="App">
      <Form
      handleChange = {handleChange}
      addTask = {addTask}
      tarea={tarea}
      />
      {tareas.map(tarea =>(
        <Task
        key = {tarea.id} 
        tarea = {tarea}
        borrarTarea = {borrarTarea}
      />
      ))}
      

    </div>
  );
}

export default App;
