import React from "react";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  return (
    <header className="py-3 px-5">
      <nav className="flex justify-between items-center">
        <br />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
