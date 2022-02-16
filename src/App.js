import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../src/components/header/Header";
import Home from "./page/home/Home";
import ContactUs from "./page/contact_us/ContactUs";
import RoyalAssets from "./page/royal_assets/RoyalAssets";
import RoyalFamily from "./page/royal_family/RoyalFamily";
import Footer from "../src/components/Footer/Footer";
import Connexion from "./page/connexion/Connexion";
import AdminPage from "./page/admin/AdminPage";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userco, setUserco] = useState(0);

  useEffect(() => {
    (async () => {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/auth/refreshToken`, {
          withCredentials: true,
        })
        .then((response) => {
          setUserco(response.data.id);
          console.log(response);
        })
        .catch((err) => console.log(err.message));
    })();
  }, [userco]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/royalassets" element={<RoyalAssets />}></Route>
        <Route path="/royalfamily" element={<RoyalFamily />}></Route>
        <Route
          path="/connect"
          element={<Connexion setUserco={setUserco} />}
        ></Route>
        {userco !== 0 ? <Route path="/admin" element={<AdminPage />} /> : null}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
