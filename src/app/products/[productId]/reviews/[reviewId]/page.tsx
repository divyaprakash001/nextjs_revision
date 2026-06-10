import React from 'react'
import { notFound,redirect } from 'next/navigation';

function getRandomInt(count:number){
  return Math.floor(Math.random() * count)
}

async function reviewPage({params}:{params:Promise<{productId:string,reviewId:string}>}) {
  // const productId = (await params).productId;
  // const reviewId = (await params).reviewId;
  const random=getRandomInt(2);
  if(random==1){
    throw new Error("Error loading review")
  }
  const {productId,reviewId} = await params;
  if(parseInt(reviewId) > 1000){
    // return notFound();
    redirect("/products")
  }
  return (
    <div>
      This is the product {productId} reviewPage for {reviewId};
    </div>
  )
}

export default reviewPage
