"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

function OrderProduct() {
    const router = useRouter()
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={()=>{
        console.log("placing your order");
        // router.push("/");
        // router.back();
        // router.replace("/");
        router.forward()
      }}>place order</button>
    </div>
  )
}

export default OrderProduct
