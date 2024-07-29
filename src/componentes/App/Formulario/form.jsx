import React from "react";

const Form = ({handleChange, addTask, tarea}) => {
    return(
        <div>
            <form onSubmit={addTask}>
                <input type="text" 
                        value={tarea} 
                        placeholder="Get MERN black belt"
                        onChange={handleChange}/>
                <div>
                <button className="btn" type="submit" >Add</button>
                </div>
                
            </form>
            
        </div>
    )
}

export default Form;