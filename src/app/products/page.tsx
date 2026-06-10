import React from 'react'

import Link from "next/link";


const productsList = [
  'Home Threatre',
  'AC',
  'Cooler',
]


function getRandomNumber(count:number):number{
  return Math.floor(Math.random()*count)
}

function products() {
   const random=getRandomNumber(2);
    // if(random==1){
    //   throw new Error("Error loading review")
    // }
    

  return (
    <>
    <div>
      <Link href={"/"}>Home</Link>
    </div>
    <div>
      {productsList.map((item,key)=>(
        <Link key={key} href={`products/${key+1}`}>
        <h1 >{item}</h1>
        </Link>
      ))}
    </div>
      </>
  )
}

export default products
