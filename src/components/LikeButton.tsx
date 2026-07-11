"use client";
import { useState } from "react"

export function LikeButton({likes}:{likes:number}){
    const [count,setCount] = useState(likes);
    console.log("count",count)
    return (
        <>
        <button className="outline-1 border-red-700" onClick={()=>setCount(count+1)}>{count} likes</button>
        </>
    )
}