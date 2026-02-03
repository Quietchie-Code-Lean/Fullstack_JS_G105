import { useState } from "react";
import ('./counter.css');

const Counter = () => {

const [count, setCount] = useState(0)

    return (
<>
<div className="btn-container">
        <button onClick={() => setCount((count) => count +1)}>Count is: {count} </button>
        <button onClick={()=> setCount((count) => count -1)}>Count Down</button>
        <button onClick={()=> setCount((count) => count = 0)}>Reset</button>
</div>
</>
    );
};

export default Counter;