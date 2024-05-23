import React from "react";
import { useEffect, useRef, useState } from "react"


export default function Timer(){
  
    let initalTime = (120)
    const [timer, setTimer] = useState(initalTime);
    const [timedOut, setTimedOut] = useState(false);

   useEffect(() => {
    if(timer < 0){
        setTimedOut(true);
        return
    }

    const countdown = setTimeout(() => {
        setTimer(n => n - 1);
    }, 1000)

    return () => clearTimeout(countdown);
   },[timer])

   function timeFormat(time){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
   }

    return(
        <>
        {timer > 0 ? (
            <div>{timeFormat(timer)}</div>)
            : (
            <div className={`notify ${timedOut ? 'ranOut' : ''}`}> Your time to pay has ran out please cancel your order</div>
            )
            
        }
       
        </>
    )
}