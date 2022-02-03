import React from "react";
import "./Formulaire.css";

function Formulaire() {
  return (
    <div className="form">
      <from className="contourform">
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Message"></input>
        <button type="submit" className="envoi">
          envoyé
        </button>
      </from>
    </div>
  );
}

export default Formulaire;
