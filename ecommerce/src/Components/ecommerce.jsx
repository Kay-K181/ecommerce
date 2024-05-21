import React, { useEffect, useState } from "react";



export default function Ecommerce({qty, setQty, total, setTotal, page, setPage}){
       
    useEffect(() => {
        setTotal(14.99 * qty);
    }, [qty])

    function add(){        
        setQty(prevState => prevState + 1);      
    }

    function subtract(){
        setQty(prevState => prevState > 0 ? prevState - 1 : 0);
    }

    function reset(){
        setQty(0)
    }

    function checkout(){
        if(total !== 0){
            setPage(1)
        }
    }

    

   
    return(
        <div className="eCommerce-wrapper">
            <h1 className="title">Amazon</h1>
            <div className="itemSection">
                <h3>Item 1</h3>
                <p>£14.99</p>
                <button className="decreaseBtn" onClick={subtract}>-</button>
                <button className="increaseBtn" onClick={add}>+</button>
                <button className="reset" onClick={reset}>Reset</button>
                <p>Quantity: <span className="quantity">{qty}</span></p>                
            </div>
            <div className="subtotal">Subtotal = £{total.toFixed(2)}</div>
            <button onClick={checkout}>Go to Basket</button>
        </div>
    )
}