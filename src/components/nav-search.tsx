"use client";
import { useState } from "react";
export const NavSearch = () => {
    const [search, seSearch] = useState("");
    console.log('search content',search);

    console.log("NavSearch component is rendered");
    return (<>
        Nav Search Input
        <input type="text" value={search} onChange = {(e) => seSearch(e.target.value)} />
    </>)
}