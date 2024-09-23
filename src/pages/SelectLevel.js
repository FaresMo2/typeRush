import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { level } from "../features/startGame/gameSlice";
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
  margin-top: 220px;
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

  &:hover,
  &:focus {
    border-color: #666;
    background-color: #444;
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin-inline: auto;
  width: 150px;
  padding: 15px 30px;
  border-radius: 17px;
  cursor: pointer;
  color: white;
  display: inline-block;
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background-color: gray;
  }
`;

const Name = styled.span`
  text-transform: capitalize;
`;

function SelectLevel() {
  const [select, setSelect] = useState("");
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!select) return;
    dispatch(level(select));
    navigate("/game");
  }

  return (
    <StyledSelectLevel onSubmit={handleSubmit}>
      <Heading>
        Hello <Name>{name}</Name>, Please select level !
      </Heading>

      <Select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="">Select Level....</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Select>

      {select && <Button>Start Game</Button>}
    </StyledSelectLevel>
  );
}

export default SelectLevel;
