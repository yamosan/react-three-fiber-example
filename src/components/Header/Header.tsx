import type { VFC } from "react";
import "./Header.css";

export const Header: VFC = (props) => {
  return (
    <header className="root">
      <h1 className="left">LOGO</h1>
      <nav className="right">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
