// ADDING CSS TO REACT COMPONENTS

// => CSS STYLING CAN BE ADDED TO REACT IN 2 WAYS
// ==> INLINE STYLING
// ==> CREATING A JS STYLE OBJECT 


// => ADDING INLINE STYLING TO COMPONENTS WITH AN OBJECT

const textStyle = {
    color: "red",
}

function Car (props) {
    return (
        <div>
            <h1 style={textStyle}>My {props.color} car</h1>
        </div>
    )
}

ReactDOM.render(<Car color="blue" />, document.getElementById("root"))


// => USING AN EXTERNAL CSS STYLESHEET

import "./style.css"


