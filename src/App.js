// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hearts from "./components/Hearts";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import LoveLetter from "./pages/LoveLetter";
import Music from "./pages/Music";
import GlobalStyle from "./styles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hearts />  {/* Floating hearts applied globally */}
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/love-letter" element={<LoveLetter />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;