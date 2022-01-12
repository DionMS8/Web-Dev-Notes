//-----[REACT HOOKS]----------------------------------------------------------------------------------------------------------

// => HOOKS BASICALLY REPLACE CLASS COMPONENTS IN REACT
// => USED TO SAVE DATA FOR REACT FUNCTION COMPONENTS
// => HOOKS CANNOT BE CONDITIONAL
// => CUSTOM HOOKS CAN BE BUILT 

// useState => RETURNS A STATEFUL VALUE AND A FUNCTION TO UPDATE IT
// useEffect => PERFORMS SIDE EFFECTS SUCH AS HTTP REQUESTS FOR API DATA WHEN A PAGE LOADS

// useContext
// useReducer
// useRef

// BEFORE ANY STATE CAN BE USED IT NEEDS TO BE IMPORTED FROM REACT

import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
    // DECLARING INITIAL VALUES FOR MULTIPLE STATE VARIABLES
    const [brand, setBrand] = useState("Ford");
    const [color, setColor] = useState("White");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");

    // USING A SINGLE HOOK AND CREATING AN OBJECT
    // const [car, setCar] = useState({
    //     brand: "Ford",
    //     model: "Mustang",
    //     year: "1964",
    //     color: "red"
    //   });
      
    return (
        <>
            <h1>About my {brand} vehicle</h1>
            <p>
                It is a {color} {model} from {year}. 
            </p>
        </>
    )
}

ReactDOM.render(<Car />, document.getElementById("root"))




