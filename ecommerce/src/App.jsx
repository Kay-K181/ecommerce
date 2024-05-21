import React from "react";
import Ecommerce from "./Components/ecommerce";
import Basket from "./Components/basket";
import { useState } from "react";
import './App.css';

export default function App(){
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  return (
    <>
     {page === 0 
      ?
      <Ecommerce
        qty = {qty}
        total = {total}
        setQty = {setQty}
        setTotal = {setTotal}
        page = {page}
        setPage = {setPage}
     />
      :
      <Basket
        total = {total} 
        setPage={setPage}
      />
    }
    </>
  )
}