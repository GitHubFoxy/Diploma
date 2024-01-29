import { useState } from "react"

const Button = () => {
    const [counter, setCount] = useState(0)
    return (
        <>
            <div>{counter}</div>
            <button onClick={() => setCount(counter+1)}>Click me </button>
        </>
    )
}
export default Button