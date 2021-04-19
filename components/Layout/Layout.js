import React from "react";
import Navbar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="px-2">
      <Navbar />
      {children}
    </div>
  );
}
