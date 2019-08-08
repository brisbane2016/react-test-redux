import React from 'react';


const SingleOption = (props) => (

    <div>
        <p>{props.option}</p>
        <button 
            onClick={()=>(
               
                props.handleSingleRemove(props.index)
                
            )}>Remove</button>   
    </div>


);

export default SingleOption;



