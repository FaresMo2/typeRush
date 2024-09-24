import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLevel, start } from "../features/startGame/gameSlice";
import Heading from "../components/Heading";

const StyledSelectLevel = styled.form`
  position: relative;
  width: 70%;
  height: 100%;
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 190px;
`;

const Select = styled.select`
  margin-inline: auto;
  display: inline-block;
  width: 30%;
  border: 2px solid #444;
  border-radius: 8px;
  padding: 10px;
  background-color: #333;
  color: white;
  font-size: 16px;
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 120px;

  &:hover,
  &:focus {
    border-color: #666;
    background-color: #444;
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin-inline: auto;
  width: 180px;
  padding: 12px 30px;
  border-radius: 17px;
  cursor: pointer;
  color: white;
  display: inline-block;
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 20px;

  &:hover {
    background-color: gray;
  }
`;

const Name = styled.span`
  text-transform: capitalize;
`;

function SelectLevel() {
  const levelSelected = useSelector((state) => state.game.level);
  const time = useSelector((state) => state.game.secondRemaining);
  const status = useSelector((state) => state.game.status);
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!levelSelected) return;
    dispatch(start());
    navigate("/game");
  }

  console.log("level status " + status);
  console.log("game time " + time);

  return (
    <StyledSelectLevel onSubmit={handleSubmit}>
      <Heading>
        Hello <Name>{name}</Name>, Please select level !
      </Heading>

      <Select
        className="slide-top"
        value={levelSelected}
        onChange={(e) => dispatch(selectLevel(e.target.value))}
      >
        <option value="">Select Level....</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Select>

      {levelSelected && <Button>Start Game</Button>}
    </StyledSelectLevel>
  );
}

export default SelectLevel;
