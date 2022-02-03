import Header from "../../components/header/Header";
import "./home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/kingdom/3")
      .then((response) => response.data)
      .then((data) => {
        setInfo(data[0]);
      });
  }, []);
  console.log(info, "ici");
  return (
    <div>
      <div className="imagePalais">
        <img src={info.image} alt="image du palais"></img>
      </div>
      <div className="nomPalais">
        <h1>{info.nom}</h1>
      </div>
      <div className="description">
        <h3> {info.description}</h3>
      </div>
    </div>
  );
}

export default Home;
