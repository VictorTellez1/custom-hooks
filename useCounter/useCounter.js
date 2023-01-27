import React from 'react'
import { useState } from 'react'
const useCounter = (initialValue=10) => {
    const [counter,setCounter]=useState(initialValue)
    const incrementCounter=(value=2)=>{
        setCounter((current)=>current+value)
    }
    const decrementCounter=(value=2)=>{
        if(counter <=0) return
        setCounter((current)=>current-value)
    }
    const reset=()=>{
        setCounter(initialValue)
    }
    return {
        counter,
        incrementCounter,
        decrementCounter,
        reset
    }
}

export default useCounter
