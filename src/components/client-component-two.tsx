"use client";
import {useState} from "react"

export default function ClientComponentTwo() {
  const [name,setName] = useState("Batman");
  return (
    <div>
      <h2>Client Component Two</h2>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  );
};