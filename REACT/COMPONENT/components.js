// CREATING FUNCTION COMPONENTS

import React from "react";
import ReactDOM from "react-dom";

export const Header = () => {
    return (
        <div>
            <h1>My Header</h1>
        </div>
    )
}

// ADDING PROPS TO COMPONENTS

function Car (props) {
    return (
        <div>
            <h1 style={{color: "green"}}>My {props.color} car</h1>
        </div>
    )
}

// RENDERING THE CAR COMPONENT INTO THE DOM
// PASSING IN A COLOR PROP AS AN ATTRIBUTE

ReactDOM.render(<Car color="blue" />, document.getElementById("root"))


