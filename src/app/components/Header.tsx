import React from "react";

function Header() {
  return (<>

    <header className="logoAndNav">
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