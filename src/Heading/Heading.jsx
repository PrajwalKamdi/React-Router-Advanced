import React from "react";
import { NavLink } from "react-router-dom";

function Heading() {
  return (
    <div className="bg-[brown] py-2 px-5">
    
      <nav className="flex items-center justify-between">
      <h1 className=" items-center text-xl text-center ">Products For Store</h1>
        <ul className="flex items-center text-xl space-x-10 px-10">
          <li>
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/form"}>Form</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Heading;
