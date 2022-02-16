import axios from "axios";
import "./connect.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Connect = ({ setUserco }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (username && password) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/login`,
          {
            username: username,
            password: password,
          },
          { withCredentials: true }
        );
        console.log(response);
        if (response.status === 200) {
          setUserco(response.data.id);

          navigate("/admin");
        }

        return response.data;
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert("renseigner une valeur ");
    }
  };

  return (
    <div className="placementBoxCo">
      <div className="connexion">
        <input
          className="inputCo"
          type="text"
          placeholder="Nom Utilisateur"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <input
          className="inputCo"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="placementBtnCo">
          <button className="btnCo" type="button" onClick={login}>
            Connexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
