"use client"

import { useEffect } from "react"

export default function ErrorPage({error}:{error:Error}) {
    useEffect(()=>{
        console.error(`Error : ${error}`)
    },[error])
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-500">Error: Failed to load users</h1>
    </div>
  )
}


