import React, { useEffect, useState } from "react";




export default function Ecommerce({setPage, page, subtotal, setSubtotal, objectList, setObjectList}){    

    function add(id){   
        const updatedList = objectList.map((item) => {
            if(item.id === id){
                return {...item, qty: item.qty + 1}
            }
            return item
        })
        setObjectList(updatedList);
    }

    function subtract(id){
       const updatedList = objectList.map((item) => {
            if(item.qty > 0 && item.id === id){
                return {...item, qty: item.qty - 1}
            }
            return item
       })
       setObjectList(updatedList);
    }

    function reset(id){
        const updatedList = objectList.map((item) => {
            if(item.id === id){
                return {...item, qty: 0}
            }
            return item
        })
        setObjectList(updatedList);
    }

    function checkout(){
        if(subtotal !== 0){
            setPage(1)
        }
    }

    useEffect(() => {
        const updatedTotal = objectList.reduce((acc, item) => {
            return acc + (item.price * item.qty)
        }, 0)
        setSubtotal(updatedTotal);
    }, [objectList]);

       
    return(
        <div className="eCommerce-wrapper">
            <h1>Kay's Shop</h1>
            <div className="itemsContainer">
                {objectList.map((info) => (
                    <div className="itemSection" key={info.id}>
                        <h3>{info.name}</h3>
                        <p>£{info.price}</p>
                        <button className="decreaseBtn" onClick={() => subtract(info.id)}>Remove from cart</button>
                        <button className="increaseBtn" onClick={() => add(info.id)}>Add to cart</button>
                        <button className="reset" onClick={() => reset(info.id)}>Reset</button>
                        <p>Quantity: <span className="quantity">{info.qty}</span></p>   
                    </div>
                ))}   
            </div> 
            <div className="subtotal">Subtotal: £{subtotal}</div>  
            <button className="basket" onClick={checkout}>Go to Basket</button>      
        </div>
    )
}