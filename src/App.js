// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hearts from "./components/Hearts";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import LoveLetter from "./pages/LoveLetter";
import GlobalStyle from "./styles/GlobalStyle";
import { useState, useEffect } from 'react';
import backgroundMusic from './assets/bg.mp3'; 

const App = () => {
  const [audio] = useState(new Audio(backgroundMusic));
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = async () => {
    console.log("Toggle button clicked");
    console.log("Current audio src:", audio.src);
    console.log("Is audio loaded:", !audio.error);

    if (isPlaying) {
      console.log("Attempting to pause");
      audio.pause();
      setIsPlaying(false);
    } else {
      console.log("Attempting to play");
      try {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Audio started playing successfully");
              setIsPlaying(true);
            })
            .catch(error => {
              console.error("Playback failed:", error);
            });
        }
      } catch (err) {
        console.error("Error playing audio:", err);
      }
    }
  };

  useEffect(() => {
    console.log("Audio file loaded:", backgroundMusic);
    audio.loop = true;
    
    // Attempt to play automatically
    const playAudio = async () => {
      try {
        await audio.play();
        console.log("Auto-play successful");
        setIsPlaying(true);
      } catch (err) {
        console.error("Auto-play failed:", err);
        setIsPlaying(false);
      }
    };
    
    playAudio();
    
    // Add error handling for audio loading
    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
    });

    audio.addEventListener('loadeddata', () => {
      console.log("Audio data loaded successfully");
    });
    
    audio.addEventListener('play', () => {
      console.log("Play event triggered");
      setIsPlaying(true);
    });
    
    audio.addEventListener('pause', () => {
      console.log("Pause event triggered");
      setIsPlaying(false);
    });
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener('error', (e) => {
        console.error("Audio error:", e);
      });
      audio.removeEventListener('loadeddata', () => {
        console.log("Audio data loaded successfully");
      });
      audio.removeEventListener('play', () => setIsPlaying(true));
      audio.removeEventListener('pause', () => setIsPlaying(false));
    };
  }, [audio]);

  useEffect(() => {
    const handleFirstInteraction = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        document.removeEventListener('click', handleFirstInteraction);
      } catch (err) {
        console.error("Play failed after interaction:", err);
      }
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [audio]);

  return (
    <Router>
      <GlobalStyle />
      <Hearts />  {/* Floating hearts applied globally */}
      <Navbar />
      <div>
        <button 
          onClick={togglePlay}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            padding: '10px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>
      </div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/love-letter" element={<LoveLetter />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;