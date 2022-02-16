import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Asset.css";

function Asset() {
  const [asset, setAsset] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/asset/")
      .then((response) => response.data)
      .then((data) => {
        setAsset(data);
      });
  }, []);

  return (
    <div className="PlacementA">
      <div className="">
        {asset ? (
          asset.map((asset) => (
            <div className="assetList">
              <div className="placement"> {asset.nom}</div>
              <div className="placement"> {asset.valeur}</div>
              <div className="placement"> {asset.quantite}</div>
            </div>
          ))
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
}

export default Asset;
