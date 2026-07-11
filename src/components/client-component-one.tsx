"use client";
import {useState} from "react"
import ClientComponentTwo from "./client-component-two";

export default function ClientComponentOne() {
  const [name,setName] = useState("ratman");
  return (
    <div>
      <h2>Client Component One</h2>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <ClientComponentTwo/>
    </div>
  );
}