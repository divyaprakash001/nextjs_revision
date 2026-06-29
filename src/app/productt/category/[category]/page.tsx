import React from 'react'

export async function generateStaticParams(){
    return [
        {category:"electronics",product:"smartphone"},
        {category:"electronics",product:"laptop"},
        {category:"books",product:"science-fiction"},
        {category:"books",product:"biography"},
    ]
}


export default async function ProductByCategory({params}:{params:Promise<{category:string}>}) {
    const {category} = await params;
  return (
    <div>
      <h1>Products in {category}</h1>
    </div>
  )
}

