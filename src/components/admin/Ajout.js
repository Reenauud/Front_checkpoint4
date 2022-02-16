import React, { useState } from "react";
import axios from "axios";

function Ajout() {
  const [biographie, setBiographie] = useState("");
  const [image, setImage] = useState("");
  //   const [exemple, setExemple] = useState([{}]);
  const [name, setName] = useState("");
  const handleClick = async () => {
    // il ne faut pas oublier de renvoyé les information souhaité apres l'url dans l'axios
    // sinon erreur 500 !!!!
    if (!image) {
      alert("selectionné une image de type svg,jpg,jpeg");
    } else {
      if (!biographie) {
        alert("veuillez fournir une bio");
      } else {
        const data = new FormData();
        //ajout du fichier image a mon Formdata
        data.append("image", image);
        //ajout de la bio au formdata
        data.append("bio", biographie);
        try {
          const res = await axios.post(
            "http://localhost:8000/api/personnage",
            data
          );
          console.log(res);
        } catch (err) {
          console.log(err.message);
        }
      }
    }
  };
  const handleChangeFile = (e) => {
    console.log(e);
    const selectedFile = e.target.files[0];
    const { type } = selectedFile;
    if (
      type !== "image/png" &&
      type !== "image/svg" &&
      type !== "image/jpg" &&
      type !== "image/jpeg"
    ) {
      alert("selectionné une image de type svg,jpg,jpeg");
    } else {
      setImage(selectedFile);
    }
  };
  return (
    <div>
      <form action="personnage" method="post" encType="multipart/form-data">
        <label htmlFor="name">
          <input
            type="text"
            placeholder="nom"
            // si on a trop de valeur a renvoyé on peut utilisé le prevState de cette facon //
            // value={exemple.name}
            // onChange={(e) =>
            //   setExemple((prevState) => [
            //     { ...prevState, name: e.target.value },
            //   ])
            // }
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="bio">
          <input
            type="text"
            placeholder="bio"
            //si on a peu de valeur a renvoyé on peut utilisé cette facon de faire //
            value={biographie}
            onChange={(e) => setBiographie(e.target.value)}
          />
        </label>
        <label htmlFor="image">
          <input
            type="file"
            placeholder="image du personnage"
            // pour pouvoir importer les photos en local il faut utilisé " Multer " .
            onChange={handleChangeFile}
          />
        </label>
      </form>
      <button type="submit" onClick={handleClick}>
        envoyé
      </button>
    </div>
  );
}

export default Ajout;
