import React, { useEffect, useState } from "react";
import Timer from "./timer";
import ListItems from "../Components/listItems";

export default function Basket({setPage, subtotal, setSubtotal, objectList, setObjectList}){

    function cancel(){
        setPage(0)
        setObjectList(ListItems)
    }

    function del(info){
        const remove = objectList.filter((element) => 
            element.id !== info.id
        );
       
        setObjectList(remove);
    }

    useEffect(() => {
        const updatedTotal = objectList.reduce((acc, item) => {
            return acc + (item.price * item.qty)
        }, 0)
        setSubtotal(updatedTotal);
    }, [objectList]);

    return(
        <div>
            <div className="title">Shopping Basket</div>
            <div className="itemsContainer">
               {objectList.filter((element) => element.qty > 0).map((info) => (
                      <div className="itemSection" key={info.id}>
                        <h3>{info.name}</h3>
                        <p>£{info.price}</p>
                        <p>Quantity: <span className="quantity">{info.qty}</span></p>  
                        <button onClick={() => del(info)}>Delete</button>
                     </div>
                     ))}
            </div>
            <div className="timerText">
            <Timer/>
            <div>Please pay £{subtotal} within the 2 minute timer.</div>            
            <button className="cancelOrder" onClick={cancel}>Cancel order</button>
            </div>

        </div>        
    )
}