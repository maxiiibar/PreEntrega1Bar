import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div id="navbar">
      <h1>PC Componentes</h1>
      <ul>
        <li>
          <a href="">Auriculares</a>
        </li>
        <li>
          <a href="">Teclados</a>
        </li>
        <li>
          <a href="">Mouse</a>
        </li>
        <li>
          <a href="">Monitores</a>
        </li>
        <li>
          <a href="">Microfonos</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
