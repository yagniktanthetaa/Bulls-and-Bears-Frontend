import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; //Bootstrap
import "bootstrap/dist/js/bootstrap.js"; //Bootstrap
import Header from "./Components/Common/Header/Header";

import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Roadmap from "./Components/Roadmap/Roadmap";
import Collections from "./Components/Collections/Collections";
import PassiveIncome from "./Components/PassiveIncome/PassiveIncome";
import Team from "./Components/Team/Team";
import Story from "./Components/Story/Story";
import Contact from "./Components/Contact/Contact";
import Partners from "./Components/Common/Partners/Partners";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import Footer from "./Components/Common/Footer/Footer";
import Raritychecker from "./Components/Rarity Checker/Raritychecker";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import TermsAndConditions from "./Components/Pages/TermsAndConditions";
import ConnectWalletNFT from "./Components/ConnectWalletNFT/ConnectWalletNFT";
// const About = lazy(() => import('./Components/About/About'))
function App() {
  AOS.init({
    duration: 2000,
  });
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={true}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/team" element={<Team />} />
        <Route path="/story" element={<Story />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/passiveincome" element={<PassiveIncome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/raritychecker" element={<Raritychecker />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/nft" element={<ConnectWalletNFT />} />
      </Routes>
      <Partners />
      <Footer />
    </>
  );
}

export default App;
