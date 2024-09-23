import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledResult = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
  width: 50%;
  height: 200px;
  margin-inline: auto;

  position: relative;
  top: 20%;
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

const Button = styled.button`
  border: 1px solid white;
  outline: none;
  display: inline-block;
  padding: 15px 30px;
  font-size: 25px;
  font-weight: bold;
  background-color: transparent;
  color: white;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;

const ResultMessage = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

function Result({ textArea, test }) {
  const navigate = useNavigate();

  return (
    <StyledResult>
      {textArea === test ? (
        <ResultMessage>Congratulations, you did it.👑</ResultMessage>
      ) : (
        <ResultMessage>
          Unfortunately, you didn't do it but you can try again😔
        </ResultMessage>
      )}
      <Button>Try Again</Button>
    </StyledResult>
  );
}

export default Result;
