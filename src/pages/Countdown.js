import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedPage from "../components/AnimatedPage";

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Pacifico', cursive;
  color: #ff69b4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const TimeDisplay = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
`;

const TimeUnit = styled.div`
  background: linear-gradient(45deg, #ff69b4, #ff1493);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(255, 20, 147, 0.2);
  min-width: 120px;

  .number {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  font-style: italic;
  color: #ff69b4;
`;

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let birthdayDate = new Date(currentYear, 6, 3); // Month is 0-based, so 6 = July

      // If birthday has passed this year, set for next year
      if (now > birthdayDate) {
        birthdayDate = new Date(currentYear + 1, 6, 3);
      }

      const difference = birthdayDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedPage>
      <CountdownContainer>
        <Title>Countdown to Your Special Day! 🎂</Title>
        <TimeDisplay>
          <TimeUnit>
            <div className="number">{timeLeft.days}</div>
            <div className="label">Days</div>
          </TimeUnit>
          <TimeUnit>
            <div className="number">{timeLeft.hours}</div>
            <div className="label">Hours</div>
          </TimeUnit>
          <TimeUnit>
            <div className="number">{timeLeft.minutes}</div>
            <div className="label">Minutes</div>
          </TimeUnit>
          <TimeUnit>
            <div className="number">{timeLeft.seconds}</div>
            <div className="label">Seconds</div>
          </TimeUnit>
        </TimeDisplay>
        <Message>Until July 3rd - Your Birthday! 🎉✨</Message>
      </CountdownContainer>
    </AnimatedPage>
  );
};

export default Countdown; 