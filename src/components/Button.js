import React from 'react';


function Button(props){

    return (<button onClick={props.clickHandler} id="new-quote"  >{props.buttonDisplayName}</button>)
}
export default Button;