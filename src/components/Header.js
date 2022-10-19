import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props){
    return(
        <div>
            <h1 className={`accordion-header justify-content-center`}>ToDo List</h1>
        </div>
    );
}
export default Header;