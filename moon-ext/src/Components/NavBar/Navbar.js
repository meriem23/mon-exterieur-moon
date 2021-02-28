import React from "react";
import Config from "./Config";
import Logo from "./Logo";
import Magasin from "./Magasin";
import Search from "./Search";
import Boutique from "./Boutique";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="grid-elements-top">
        <Logo />
        <Search />
        <Magasin />
        <Config />
      </div>
      <div className="grid-elements-bottom">
        <p className="acceuil">Accueil</p>
        <Boutique />
        <p className="realisation">Nos réalisation</p>
        <Contact />
      </div>
    </div>
  );
};

export default Navbar;
