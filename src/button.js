import React from "react";

function Button(props){
    return(<button onClick={props.onClick}>{props.btn}</button>)
}
export default Button