// src/pages/Home.js
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Gallery from "../pages/Gallery";
import LoveLetter from "../pages/LoveLetter";
import Countdown from "../pages/Countdown";

const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  background: transparent;
`;

const Hero = styled(Section)`
  text-align: center;
  
  h1 {
    margin-bottom: 2rem;
    font-family: 'Pacifico', cursive;
  }
  
  p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  background: transparent;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [letterRef, letterInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [countdownRef, countdownInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <Container>
      <Hero
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h1>Welcome to Our Love Story</h1>
        <p>Scroll down to explore our journey together ❤️</p>
      </Hero>

      <Section
        ref={galleryRef}
        initial="hidden"
        animate={galleryInView ? "visible" : "hidden"}
        variants={fadeIn}
        id="gallery"
      >
        <Gallery />
      </Section>

      <Section
        ref={letterRef}
        initial="visible"
        animate={letterInView ? "visible" : "hidden"}
        variants={fadeIn}
        id="letter"
      >
        <LoveLetter />
      </Section>

      <Section
        ref={countdownRef}
        initial="visible"
        animate={countdownInView ? "visible" : "hidden"}
        variants={fadeIn}
        id="countdown"
      >
        <Countdown />
      </Section>
    </Container>
  );
};

export default Home;