// src/pages/Music.js
import AnimatedPage from "../components/AnimatedPage";
import { useState } from "react";

const Music = () => {
  const [playing, setPlaying] = useState(false);
  const audio = new Audio("/your-love-song.mp3");

  const toggleMusic = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <AnimatedPage>
      <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
        <h1>A Song for Us ❤️</h1>
        <button onClick={toggleMusic} style={{ fontSize: "1.5rem", padding: "10px" }}>
          {playing ? "Pause Music" : "Play Music"}
        </button>
      </div>
    </AnimatedPage>
  );
};

export default Music;