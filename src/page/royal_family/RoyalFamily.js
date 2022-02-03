import axios from "axios";
import React, { useEffect, useState } from "react";
import "./royal_family.css";

function RoyalFamily() {
  const [perso, setPerso] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/personnage/")
      .then((response) => response.data)
      .then((data) => {
        setPerso(data);
      });
  }, []);
  console.log(perso);
  return (
    <div>
      <h1 className="h1royal">royal family</h1>

      <div className="placementimg">
        {perso ? (
          perso.map((pers) => (
            <img className="imgFamily" src={pers.image} alt={pers.name} />
          ))
        ) : (
          <div>loading</div>
        )}
      </div>
      <div className="nameFamily">
        {perso ? perso.map((pers) => <h3>{pers.name}</h3>) : <div>loading</div>}
      </div>
      <div className="bioFamily">
        {perso ? (
          perso.map((pers) => <h4>{pers.biographie}</h4>)
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
}

export default RoyalFamily;
