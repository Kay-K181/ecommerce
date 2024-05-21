import React from "react";
import Timer from "./timer";

export default function Basket({total, setPage}){

    function cancel(){
        setPage(0)
    }
    return(
        <div>
            <Timer/>
            <div>Please pay £{total} within the 1 minute timer.</div>
            <button onClick={cancel}>Cancel order</button>

        </div>        
    )
}