import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StyledTimer = styled.div`
  font-size: 25px;
  text-align: right;
  width: 76%;
`;

function Timer() {
  const secondRemaining = useSelector((state) => state.game.secondRemaining);
  const dispatch = useDispatch();
  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <StyledTimer>
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </StyledTimer>
  );
}

export default Timer;
