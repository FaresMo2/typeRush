import { useEffect } from "react";
import styled from "styled-components";

const StyledTimer = styled.div`
  margin-top: 50px;
  width: 58%;
  margin-left: auto;
  font-size: 20px;
`;

function Timer({ timeLeft, setTimeLeft }) {
  useEffect(() => {
    // Create an interval that decreases the timeLeft by 1 every second
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); //

    return () => clearInterval(timer);
  }, [setTimeLeft]);

  return <StyledTimer>Time Remaining: {timeLeft}s</StyledTimer>;
}

export default Timer;
