// "use client";
import { NavSearch } from "./nav-search";
import { NavLinks } from "./nav-links";
// import {useState} from "react";


export const Navbar = () => {
    console.log("Navbar is rendered");
    // const [search, setSearch] = useState("");
  return (
    <div>
      <NavSearch />
      <NavLinks />
    </div>
  );
};