import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../features/startGame/gameSlice";

const StyledResult = styled.div`
  position: relative;
  color: white;
  width: 80%;
  top: 20%;
  z-index: 100;
  text-align: center;

  /* Adding fade-in animation */
  opacity: 0;
  animation: fadeIn 3s ease forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Button = styled(Link)`
  border: 1px solid white;
  outline: none;
  display: inline-block;
  padding: 8px 35px;
  font-size: 25px;
  font-weight: bold;
  background-color: transparent;
  color: white;
  cursor: pointer;
  transition: 0.3s linear;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;

const ResultMessage = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

const totalTime = 5;

function Result({ textArea, randomTest }) {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.game.secondRemaining);

  return (
    <StyledResult>
      {textArea === randomTest ? (
        <ResultMessage>Congratulations, you did it.👑</ResultMessage>
      ) : (
        <ResultMessage>
          Unfortunately, you didn't do it but you can try again😔
        </ResultMessage>
      )}
      <Button to="/level" onClick={() => dispatch(restart())}>
        Try Again
      </Button>
    </StyledResult>
  );
}

export default Result;
