import React, { useState, useEffect } from 'react';

function Event(){
    const[name,setName] = useState('');

    const handleClick = () => {
        alert(`${name}`);
    }

    return(
        <div>
            <button onClick={handleClick}>Submit</button>
            <label>Name: <input type = "text" value={name} onChange={(e) => setName(e.target.value)}/></label>
            <p>Your Name is: {name} </p>
        </div>
    );
}

export default Event;