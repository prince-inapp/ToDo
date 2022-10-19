import React from 'react';
import AddButton from "./UI/AddButton";
import 'bootstrap/dist/css/bootstrap.min.css';

function InputTodo(props){
    return(
            <div>
            <h3>Add ToDo</h3>
            <form>
                <input type="text" className={`input-group`}/>
                <br/>
                <AddButton name="Add ToDo"/>
            </form>
            </div>
    )
};
export default InputTodo;