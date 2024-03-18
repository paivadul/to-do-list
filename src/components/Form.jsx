import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = () => {
    const [ taskList, setTaskList ] = useState([]); //Lista de tareas
    const [ task, setTask ] = useState(''); //Tarea individual

    const changeTask = (e) => { //para actualizar el estado de tarea individual
        setTask(e.target.value)
    };

    const addTask = () => {
        setTaskList([...taskList, { name: task, completed: false}]);
        setTask('');
    }

    const deleteTask = (index) => { //ESTO NO ENTIENDO BIEN. QUÉ ES _? 
        setTaskList(taskList.filter((_, i) => i !== index));
    }

    const tachTask = (i) => { //ESTO TAMPOCO ENTIENDO BIEN
        const tach = [...taskList]; //copia la lista de tareas en una variable
        tach[i].completed = ! tach[i].completed; //cambia el estado de complete a true
        setTaskList(tach);
    }
    
    return (
        <>
        <h1>Lista de Tareas</h1>
            <form>
                <div>
                    <input type="text" name="addTask" value={task} onChange={changeTask} />
                    <button type="button" onClick={addTask}>Add</button>
                </div>
                <div>
                    {taskList.map( (task, i) => (
                        <div key={i} > 
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                checked={task.completed} //estado del checkbox, para decir si está o no marcada como completa
                                onChange={() => {tachTask(i)}}
                                id={`task-${i}`}/>
                            <label className={task.completed ? 'completed' : ''} htmlFor={`task-${i}`} >{task.name}</label>
                            <button type="button" onClick={() => deleteTask(i)}>Delete</button>
                        </div>
                    ))}
                </div>
            </form>
            <style>
                {`
                    .completed{
                        text-decoration: line-through;
                    }
                `}
            </style>
        </>
    )
}

export default Form;