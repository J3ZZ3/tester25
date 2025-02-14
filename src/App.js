// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import LoveLetter from "./pages/LoveLetter";
import Music from "./pages/Music";

const App = () => {
  return (
    <Router>
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