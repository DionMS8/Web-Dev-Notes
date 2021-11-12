// CREATING FUNCTION COMPONENTS

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
            <h1>My {props.color} car</h1>
        </div>
    )
}

// PASSING IN A COLOR PROP AS AN ATTRIBUTE

ReactDOM.render(<Car color="blue" />, document.getElementById("root"))






