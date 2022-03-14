import React from "react";
import { NavLink } from "react-router-dom";
import MenuNav from "./MenuNav";
import UserNav from "./UserNav";

export default function Nav() {
  return (
    <div className="h-20 bg-gray-300 w-full flex justify-between items-center px-5">
      <NavLink to="/">
        <span className="text-red-600 font-medium">Phim Mới</span>
      </NavLink>
      <MenuNav />
      <UserNav />
    </div>
  );
}
