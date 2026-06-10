'use client';
import React from 'react'
import { usePathname } from 'next/navigation'


function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2]
  const reviewId = pathname.split("/")[4]
  return (
    <div className="mx-auto flex justify-center align-center">
      <h1>Review {reviewId} not found for the product {productId}</h1>
      {pathname}
    </div>
  )
}

export default NotFound
