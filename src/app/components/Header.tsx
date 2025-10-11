import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
