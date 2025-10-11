import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-semibold">Home</div>
      <nav>
        <ul className="flex gap-6 text-gray-700 list-none">
          <li>
            <a href="#" className="hover:text-blue-600 transition-colors ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
