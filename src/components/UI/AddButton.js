import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddButton(props){
    return(
            <button className={`btn btn-primary`}>
               {props.name}
            </button>
    )
};

export default AddButton;