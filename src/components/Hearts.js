// src/components/Hearts.js
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
`;

const Heart = styled.div`
  position: fixed;
  bottom: 0;
  left: ${(props) => props.left}%;
  font-size: ${(props) => props.size}px;
  color: red;
  opacity: 0.7;
  animation: ${float} ${(props) => props.duration}s linear infinite;
`;

const Hearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 30 + 10,
          duration: Math.random() * 5 + 3,
        },
      ]);
      setTimeout(() => setHearts((prev) => prev.slice(1)), 6000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <Heart key={heart.id} left={heart.left} size={heart.size} duration={heart.duration}>
          ❤️
        </Heart>
      ))}
    </>
  );
};

export default Hearts;