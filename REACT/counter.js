import React, { useState } from "react"
import ReactDOM from "react-dom"

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>My count is { count }</h1>
            <button onClick={() =>setCount(count+1)}>
                Add Count
            </button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));


