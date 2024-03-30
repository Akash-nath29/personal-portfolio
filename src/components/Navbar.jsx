import React, { useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar md:flex justify-between p-5 align-center my-0 px-9">
      <div className="nav-brand flex text-2xl justify-between md:justify-center items-center h-full">
        <a
          href="#"
          onClick={() => scrollToSection("home")}
          className="flex justify-center items-center h-full"
        >
          <h1>akash.nath()</h1>
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={30}
          height={30}
          className="sm:block md:hidden"
          name={open ? "close" : "menu"}
          onClick={() => setOpen(!open)}
        >
          <path
            fill="#ffffff"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
      <ul
        className={`navLinks my-5 md:my-0 md:flex flex-col md:flex-row justify-evenly space-x-2 md:space-x-0 gap-10 p-2 duration:1000 ${
          open ? "flex" : "hidden"
        }`}
      >
        <li className="nav-link">
          <a href="#home">
            Home
          </a>
        </li>
        <li className="nav-link">
          <a href="#about">
            About
          </a>
        </li>
        <li className="nav-link">
          <a href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-link">
          <a href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-link">
          <a href="#">Certifications</a>
        </li>
        <li className="nav-link">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className={`sponser-btn md:block ${open ? "block" : "hidden"}`}>
        <a href="https://patreon.com/AkashNath">
          <button className="py-2 px-5 flex justify-center align-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded">
            Sponser
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
