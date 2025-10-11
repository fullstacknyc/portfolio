import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="./about/page.tsx">
              About
            </a>
          </li>
          <li>
            <a href="./contact/page.tsx">
              Contact
            </a>
          </li>
          <li>
            <a href="./projects/page.tsx">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
