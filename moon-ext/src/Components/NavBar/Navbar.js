import React from "react";
import Config from "./Config";
import Logo from "./Logo";
import Magasin from "./Magasin";
import Search from "./Search";
import Boutique from "./Boutique";
import Contact from "./Contact";
import "./_Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav_bar">
      <div className="grid_elements_top">
        <Logo />
        <Search />
        <Magasin />
        <Config />
      </div>
      <div className="grid_elements_bottom">
        <div className="acceuil">
          <p>Accueil</p>
        </div>
        <Boutique />
        <div className="realisation">
          <p>Nos réalisations</p>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Navbar;
