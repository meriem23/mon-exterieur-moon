import React, { useState } from "react";
import FooterLogo from "./FooterLogo";
import Clock from "../../icons/Clock";
import "./_Footer.scss";

const Footer = () => {
  const links = [
    "Configurateur",
    "Notre magasin",
    "Notice et installation",
    "Livraison Transport",
  ];
  const adress = [
    {
      title_adress: "Adress:",
      content_adress: ` 3 rue du champ de verger 
        Allonnes, Pays de la Loire, France`,
    },
    {
      title_adress: "Telephone:",
      content_adress: "+33 2 43 57 00 87",
    },
  ];
  return (
    <div className="footer_style">
      <FooterLogo />
      <div>
        <h4 className="footer_header">Liens Utiles</h4>
        {links.map((el) => (
          <p className="link_footer">{el}</p>
        ))}
      </div>
      <div>
        <h4 className="footer_header">Nous contacter</h4>
        {adress.map((el) => (
          <div>
            <p className="title_adress_footer">{el.title_adress}</p>
            <p className="content_adress_footer">{el.content_adress}</p>
          </div>
        ))}
      </div>
      <div>
        <h4 className="footer_header">Horaires</h4>
        <p className="work_days">Lundi à Vendredi</p>
        <div className="work_hours">
          <Clock />
          <p className="work_time">7:30-12:00</p>
        </div>
        <div className="work_hours">
          <Clock />
          <p className="work_time">13:30-18:00</p>
        </div>
        <p className="work_days">
          Samedi <br />
          <span>(Fermé les samedis de janvier et février)</span>
        </p>
        <div className="work_hours">
          <Clock />
          <p className="work_time">9:00-12:00</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
