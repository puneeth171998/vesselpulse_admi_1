import React from 'react'
import Counter from '../count'
import { useDispatch } from 'react-redux'
export default function Counterr() {
    const dispatch = useDispatch()
  return (
     
    <div style={{margin:"auto"}}>
        <h1>Hello </h1>
        <button onClick={(e) => dispatch({ type: 'INCREMENT'})} className=' p-4 border-2 border-red-700'>Increment</button><br/>
        <Counter/>
       <button onClick={(e) => dispatch({ type: "DECREMENT"})} className=' p-4 border-2 border-red-700'>Decreament</button>  
    </div>
  )
}
