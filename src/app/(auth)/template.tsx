"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css"

const navLinks = [
  {name:"Home",href:"/"},
  {name:"Register",href:"/register"},
  {name:"Login",href:"/login"},
  {name:"Forgot-Password",href:"/forgot-password"},
]



export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [input,setInput] = useState("");

  const pathname = usePathname()
  return (
    <html lang="en">
      <body>
        

        <nav className="bg-amber-50 p-4 flex justify-evenly items-center m-0">
            {
              navLinks.map((link,key)=>{
                const isActive = pathname == link.href || 
                (pathname.startsWith(link.href) && link.href !== "/");
                return(
                <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} key={key} href={link.href}>{link.name}</Link>
              )})
            }
          </nav>
          {pathname}
        <main>{children}</main>
        <div>
          <input className="outline-1 outline-red-500" value={input} type="text" onChange={(e)=> setInput(e.target.value)} />
        </div>
      </body>
    </html>
  );
}
