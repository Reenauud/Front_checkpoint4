import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/Header";
import Home from "./page/home/Home";
import ContactUs from "./page/contact_us/ContactUs";
import RoyalAssets from "./page/royal_assets/RoyalAssets";
import RoyalFamily from "./page/royal_family/RoyalFamily";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/royalassets" element={<RoyalAssets />}></Route>
        <Route path="/royalfamily" element={<RoyalFamily />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
