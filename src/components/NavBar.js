import React from "react";
import "./NavBar.css"


function NavBar() {
  const Links = ["home", "memelist", "memeimage"];
  return (<nav>
  <a href= "#home">Home    </a>
  <a href="#memelist">List     </a>
  <a href="#memeimage">Images   </a>
  </nav>);
}

export default NavBar;
