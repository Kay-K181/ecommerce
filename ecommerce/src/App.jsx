import React from "react";
import Ecommerce from "./Components/ecommerce";
import Basket from "./Components/basket";
import ListItems from "../src/Components/listItems";
import { useState } from "react";
import './App.css';

export default function App(){
  const [page, setPage] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [objectList, setObjectList] = useState(ListItems);

  return (
    <>
     {page === 0 
      ?
      <Ecommerce         
        page = {page}
        setPage = {setPage}
        subtotal={subtotal}
        setSubtotal={setSubtotal}
        objectList={objectList}
        setObjectList={setObjectList}
     />
      :
      <Basket        
        setPage={setPage}
        objectList={objectList}
        setObjectList={setObjectList}
        subtotal={subtotal}
        setSubtotal={setSubtotal}
      />
    }
    </>
  )
}