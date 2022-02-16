import { useState } from "react";
import "./Formulaire.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Formulaire() {
  axios
    .post(`${API_URL}/api/contactus/html`, {})
    .then((res) => {
      if (res.status === 200) {
        console.log("alerte");
        alert("Merci");
      } else {
        console.log(res);
      }
    })
    .catch((err) => console.error(err.message));

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
