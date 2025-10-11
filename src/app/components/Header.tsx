import React from "react";

function Header() {
  return (<>
  <header className="flex flex-row items-center justify-between w-full px-4 sm:px-8">
  <div className="navLogo">
    <p>Home</p>
  </div>
  <nav>
    <ul>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
      <li><a>Projects</a></li>
    </ul>
  </nav>
</header>

    </>
  )
}
export default Header;