import React from "react";
import Nav from "../Component/Navbar/Nav";

export default function Layout({ Component }) {
  return (
    <div>
      <Nav />
      <Component />
    </div>
  );
}
