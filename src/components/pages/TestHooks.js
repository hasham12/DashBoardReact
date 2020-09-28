import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

const Hooks = ( ) => {

    const state = useState();
    // Array Destructing
    const [count, setCount] = useState(0);
   //current value, UpdateValue/Function = Assign Value
   
   const IncNum = () => {
       setCount(count+1);
   }

return(
    <>
    <h1>{count}</h1>
    <Button onClick={IncNum}>Click Me</Button>
    </>
)
}

export default Hooks